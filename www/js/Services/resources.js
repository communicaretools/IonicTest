angular.module('starter.services')
    .service('resources', [
        '$q',
        '$http',
        '$localStorage',
        'resourcePath',
        'language',
        function ($q, $http, $localStorage, resourcePath, language) {
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
                $http.get(path).success(function(result) {
                    resources = angular.extend(resources, result);
                    $localStorage.resources = resources; 
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
                return $localStorage.resources[key] ? $localStorage.resources[key] : "Missing key: '" + key + "'";
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