angular.module('starter.controllers')
.controller('LoginCtrl', ['$scope', '$log', '$state', 'loginManager', function ($scope, $log, $state, loginManager) {
    var onLoginSuccess = function (result) {
        $log.info(result);
        $scope.$emit("logInChange", true);
        $state.go('forum.threads');
    };
    var onLogoutSuccess = function () {
        $scope.$emit("logInChange", false);
        loginManager.options(options)
    };
    var options = function (data) {
        $scope.$emit("logInChange", data.isLoggedIn);
        $scope.options = data;
    };
    loginManager.options(options);

    $scope.login = function (username, password) {
        loginManager.login(username, password, onLoginSuccess);
    };
    $scope.logout = function() {
        loginManager.logout(onLogoutSuccess);
    };
}]);
