angular.module('starter.controllers')
	.controller('ThreadsCtrl', ['$scope', function($scope){
		$scope.threads = [{
			name: "Something",
			id: 0,
		},
		{
			name: "Something else",
			id: 1
		}];
	}]);