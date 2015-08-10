angular.module('starter.services')
    .service('resources', [
        '$q',
        '$http',
        'resourcePath',
        'language',
        function ($q, $http, resourcePath, language) {
            var resources = {};
            var deferred = $q.defer();
            var loaded = false;

            var loadLanguage = function () {
                if (loaded) {
                    deferred.resolve("Allready loaded");
                    return;
                };
                resources = {};

                var path = resourcePath + 'global.' + language + '.json';
                $http.get(path, {
                    headers: {
                        'Accept': 'application/json;charset=utf-8',
                        'Accept-Charset': 'charset=utf-8',
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                }).success(function(result) {
                    resources = angular.extend(resources, result);
                    loaded = true;
                    deferred.resolve("Loaded");
                });
            };

            var get = function (key) {
                if (!loaded) {
                    return deferred.promise.then(function () {
                        return get(key);
                    });
                }
                return resources[key] ? resources[key] : "Missing key: '" + key + "'";
            };

            var load = function () {
                return deferred.promise;
            };

            loadLanguage();

            return {
                get: get,
                load: load
            };
        }
    ]);