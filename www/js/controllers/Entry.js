angular.module('starter.controllers')
.controller('EntryCtrl', ['$scope', '$state', 'entryService' ,
	function($scope, $state, entryService) {
	if(entryService.getSelected()){
		$scope.quoteText = entryService.getSelected().content;
		console.log($scope.quoteText);
		entryService.selectEntry(-1);
	}

	$scope.cancel = function () {
		$state.go('forum.thread.dash');
	};

	$scope.addEntry = function(entry) {
		var newEntry = {};
		newEntry.content = entry;
		newEntry.quoteText = $scope.quoteText;
		entryService.add($scope.threadId, newEntry);
		$state.go('forum.thread.dash');
	};
}]);