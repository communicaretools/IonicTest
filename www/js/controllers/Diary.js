angular.module('starter.controllers')
	.controller('DiaryCtrl', [
	'diaryService',
	function (diaryService) {
	var vm = this;

	var onSuccess = function (result) {
		vm.entries = result;
	};
	vm.entries = diaryService.get(onSuccess);

	console.log(vm.entries);
}]);