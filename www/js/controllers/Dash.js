angular.module('starter.controllers')
.controller('DashCtrl', ['$scope', '$state', '$ionicPopup', 'entryService', 'preferenceService', '$stateParams',
	function($scope, $state, $ionicPopup, entryService, preferenceService, $stateParams) {

	$scope.entries = entryService.get($stateParams.threadId);
	$scope.dateFormat = preferenceService.getDateFormat();


	$scope.quoteEntry = function (index) {
		entryService.selectEntry(index);
		$state.go('tab.newEntry');
	};

	$scope.confirmDelete = function (index){
		var confirmPopup = $ionicPopup.confirm({
				title: 'Slett innlegg',
				template: 'Er du sikker på at du vil slette innlegget?'
			});
		confirmPopup.then(function(res) {
			if(res) {
				console.log("Deleting entry " + index);
				entryService.deleteEntry(index);
			} else {

			}
		});
	};
}]);
