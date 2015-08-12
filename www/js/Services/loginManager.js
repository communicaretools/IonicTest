angular.module('starter.services')
    .factory("loginManager", [
        "$http", "$log", "ApiEndpoint", "$localStorage", function ($http, $log, ApiEndpoint, $localStorage) {
            var onError = function(e) {
                $log.error(e.msg);
            };

            var getLoginOptions = function (onSuccess) {
                $http.get(ApiEndpoint.url + "/login").then(
                    function(result) {
                        onSuccess(result.data);
                    },
                    onError);
            };

            var performLogin = function(username, password, onSuccess, onLoginError) {
                $http.post(ApiEndpoint.url + "/login", { username: username, password: password })
                    .then(onSuccess, onLoginError);
                $localStorage.userName = username;
            };

            var logout = function(onSuccess) {
                $http.get(ApiEndpoint.url + "/logout")
                    .then(onSuccess, onError);
                $localStorage.$reset();
            };

            return {
                "login": performLogin,
                "logout": logout,
                "options": getLoginOptions
            };
        }
    ]);