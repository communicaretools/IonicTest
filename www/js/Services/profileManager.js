angular.module('starter.services')
    .factory("profileManager", [
        "$http", "$log", "ApiEndpoint", function ($http, $log, ApiEndpoint) {

            var getUser = function (onSuccess, onError) {
                $http.get(ApiEndpoint.url + "/profile/userdata")
                    .then(onSuccess, onError);
            };

            return {
                "get": getUser,
            };
        }
    ]);