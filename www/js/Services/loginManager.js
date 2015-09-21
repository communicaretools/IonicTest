angular.module('starter.services')
    .factory("loginManager", [
        "$http", "$log", "ApiEndpoint", function ($http, $log, ApiEndpoint) {
            var authEndpoint = ApiEndpoint.connectApiUrl + '/authentication/api/authentication';
            //var authEndpoint = "http://localhost:8100/authTest"

            var onError = function (e) {
                $log.error(e.msg);
            };

            var getLoginOptions = function (onSuccess) {
                $http.get(authEndpoint + "/login").then(
                    function (result) {
                        onSuccess(result.data);
                    },
                    onError);
            };

            var performLogin = function (username, password, onSuccess, onLoginError) {
                $http.post(authEndpoint + "/login", { username: username, password: password })
                    .then(onSuccess, onLoginError);
            };

            var logout = function (onSuccess) {
                $http.get(authEndpoint + "/logout")
                    .then(onSuccess, onError);
            };

            return {
                "login": performLogin,
                "logout": logout,
                "options": getLoginOptions
            };
        }
    ]);