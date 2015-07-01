'use strict';

angular.module('starter.infrastructure')
    .factory('loadContext', ['$http', 'transformApiResponse', 'ApiEndpoint', function ($http, transformApiResponse, ApiEndpoint) {
        return function () {
            return $http({
                method: 'GET',
                url: apiRoot,
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                transformResponse: function (response) {
                    return transformApiResponse(angular.extend({}, angular.fromJson(response)));
                }
            });
        };
    }])
    .factory('transformApiResponse', ['$http', function ($http) {
        var convertLinks = function (links) {
            var result = {};
            angular.forEach(links, function (link) {
                result[link.rel] = link.href;
            });
            return result;
        };

        var attachActions = function (target, level) {
            // avoid infinite recursion in case of cyclic object graphs
            // (usually not a  problem, since this function runs on json
            // graphs returned from the server)
            level = level || 0;
            if (level >= 64) {
                throw 'Tried to transform an api response with a very deep object graph (more than 64 nestings) - did you make a recursive graph, or did you select all the data in the database for return over the wire?';
            }

            for (var propertyName in target) {
                if (propertyName === "links") {
                    angular.forEach(target.links, function (link) {
                        target["$" + link.rel] = function (toSend) {
                            var browser = $.browser.msie && parseInt($.browser.version, 10);
                            var shouldSubstitutePatch = browser == 6 || browser == 7 || browser == 8;
                            var isVerbThatShouldBeSubstituted = link.method.toUpperCase() === "PATCH" || link.method.toUpperCase() === "PUT" || link.method.toUpperCase() === "DELETE";
                            var headers = { "Content-Type": "application/json; charset=UTF-8" };
                            if (shouldSubstitutePatch && isVerbThatShouldBeSubstituted) {
                                headers["X-Alternate-Verb"] = link.method.toUpperCase();
                            }

                            return $http({
                                method: link.method,
                                url: link.href,
                                params: link.method == "GET" ? toSend : undefined,
                                data: link.method == "GET" ? undefined : toSend,
                                headers: headers,
                                transformResponse: function (response, headersGetter) {
                                    if (!response) return {};
                                    var obj = angular.fromJson(response);
                                    if (angular.isArray(obj)) {
                                        return obj.map(function (o) {
                                            return attachActions(angular.extend({}, o), 0);
                                        });
                                    } else {
                                        return attachActions(angular.extend({}, obj), 0);
                                    }
                                }
                            });
                        };
                    });
                    target.$links = target.links;
                    target.links = convertLinks(target.links);
                } else if (angular.isObject(target[propertyName])) {
                    attachActions(target[propertyName], level + 1);
                }
            }

            return target;
        };

        return function(target) {
            return attachActions(target, 0);
        };
    }])
    .factory("RestEndpoint", ['$http', 'transformApiResponse', function ($http, transformApiResponse) {
        var EndpointFactory = function (endpointUrl) {
            var query = function (onSuccessOrParameter, optionalOnSuccess) {
                var onSuccess = angular.isFunction(onSuccessOrParameter) ? onSuccessOrParameter : optionalOnSuccess;
                var parameter = angular.isFunction(onSuccessOrParameter) ? undefined : onSuccessOrParameter;

                var result = [];
                $http({ method: "GET", url: endpointUrl, params: parameter })
                    .success(function (data) {
                        angular.forEach(data, function (instanceData) {
                            var item = angular.extend({}, instanceData);
                            result.push(transformApiResponse(item));
                        });
                        if (onSuccess) { onSuccess(result); }
                    });
                return result;
            };

            var get = function (onSuccess) {
                var result = {};
                $http({ method: "GET", url: endpointUrl })
                    .success(function (data) {
                        angular.extend(result, data);
                        transformApiResponse(result);
                        if (onSuccess) { onSuccess(result); }
                    });
                return result;
            };

            return {
                query: query,
                get: get
            };
        };

        return EndpointFactory;
    } ]);
