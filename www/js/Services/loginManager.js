angular.module('starter.services')
    .factory("loginManager", [
        "$http", "$log", "ApiEndpoint", function($http, $log, ApiEndpoint) {
            var onError = function(e) {
                $log.error(e.msg);
            };
            var getLoginOptions = function(onSuccess) {
                $http.get(ApiEndpoint.url + "/login").then(
                    function(result) {
                        onSuccess(result.data);
                    },
                    onError);
            };

            var performLogin = function(username, password, onSuccess, onLoginError) {
                $http.post(ApiEndpoint.url + "/login", { username: username, password: password })
                    .then(onSuccess, onLoginError);
            };

            var logout = function(onSuccess) {
                $http.get(ApiEndpoint.url + "/logout")
                    .then(onSuccess, onError);
            };

            return {
                "login": performLogin,
                "logout": logout,
                "options": getLoginOptions
            };
        }
    ]);