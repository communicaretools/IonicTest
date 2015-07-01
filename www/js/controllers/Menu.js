angular.module('starter.controllers')
	.controller('MenuCtrl', ['$scope', 'loginManager', function ($scope, loginManager) {
    $scope.isLoggedIn = true;
}]);