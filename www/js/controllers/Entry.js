angular.module('starter.controllers')
.controller('EntryCtrl', ['$scope', '$state', '$stateParams', 'entryService' ,
	function($scope, $state, $stateParams, entryService) {
	if(entryService.getSelected()){
		$scope.quoteText = entryService.getSelected().content;
		entryService.selectEntry(-1);
	}

	$scope.cancel = function () {
		$state.go('forum.thread.dash');
	};

	$scope.addEntry = function(entry) {
		var newEntry = {};
		newEntry.content = entry;
		newEntry.quoteText = $scope.quoteText;
		entryService.add($stateParams.threadId, newEntry);
		$state.go('forum.thread.dash');
	};
}]);