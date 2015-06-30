angular.module('starter.controllers')
.controller('EntryCtrl', ['$scope', '$state', 'entryService' ,
	function($scope, $state, entryService) {
	if(entryService.getSelected()){
		$scope.quoteText = entryService.getSelected().content;
		console.log($scope.quoteText);
		entryService.selectEntry(-1);
	}

	$scope.cancel = function () {
		$state.go('tab.dash');
	};

	$scope.addEntry = function(entry) {
		var newEntry = {};
		newEntry.content = entry;
		newEntry.quoteText = $scope.quoteText;
		entryService.add(newEntry);
		$state.go('tab.dash');
	};
}]);