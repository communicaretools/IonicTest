angular.module('starter.controllers')
	.controller('CalendarCtrl', [
		'$scope',
		'$localStorage',
		'$cordovaCalendar',
		function ($scope, $localStorage, $cordovaCalendar) {
			if(!$scope.user) {
				$scope.user = $localStorage.user;
			}
		}
	]);