angular.module('starter.controllers').controller('DiaryCtrl', [
	'diaryService',
	function (diaryService) {
	var vm = this;
	diaryService.hello();
}]);