angular.module('starter.controllers')
	.controller('DiaryCtrl', [
	'diaryService',
	function (diaryService) {
	var vm = this;
	vm.entries = diaryService.get();
	console.log(vm.entries);
}]);