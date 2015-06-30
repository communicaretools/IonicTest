angular.module('starter.controllers')
.controller('AccountCtrl', function($scope, preferenceService) {
	$scope.dateFormat = preferenceService.getDateFormat();

	$scope.updateFormat = function (format){
		preferenceService.updateFormat(format);
	}; 
});
