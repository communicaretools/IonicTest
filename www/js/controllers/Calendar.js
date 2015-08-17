angular.module('starter.controllers')
	.controller('CalendarCtrl', [
		'$scope',
		'$localStorage',
		function ($scope, $localStorage) {
			if(!$scope.user) {
				$scope.user = $localStorage.user;
			}
		}
	]);