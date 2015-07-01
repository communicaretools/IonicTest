angular.module('starter.controllers')
.controller('LoginCtrl', function ($scope, $http, $log, $state, ApiEndpoint) {
    $scope.login = function (username, password) {
        $http.post(ApiEndpoint.url + "/login", { username: username, password: password }).then(
            function (result) {
                $log.info(result);
                $state.go('forum');
            },
            function () { });
    };
    $scope.logout = function() {
        $http.get(ApiEndpoint.url + "/logout").then(
            function() {},
            function() {});
    };
});
