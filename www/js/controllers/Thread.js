angular.module('starter.controllers')
	.controller('ThreadCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
		$scope.currentId = $stateParams.threadId;
		console.log("CurrentId: " + $scope.currentId);
		console.log("State Id: " + $stateParams.threadId);

}]);