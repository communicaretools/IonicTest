angular.module('starter.services')
    .factory("profileManager", [
        "$http", "$log", "ApiEndpoint", function ($http, $log, ApiEndpoint) {
            var onError = function(e) {
                $log.error(e.msg);
            };

            var getUser = function (onSuccess, onLoginError) {
                $http.get(ApiEndpoint.url + "/profile/userdata")
                    .then(onSuccess, onLoginError);
            };

            return {
                "get": getUser,
            };
        }
    ]);