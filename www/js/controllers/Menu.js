angular.module('starter.controllers')
	.controller('MenuCtrl', ['$scope', 'loginManager', function ($scope, loginManager) {
        if (typeof $scope.isLoggedIn === "undefined") {
            loginManager.options(function(data) {
                $scope.isLoggedIn = data.isLoggedIn;
            })
        }
	    $scope.$on("logInChange", function (e, status) {
        console.log(status);
        $scope.isLoggedIn = status;
    });
}]);