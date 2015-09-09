angular.module('starter.controllers')
<<<<<<< HEAD
    .controller('DiaryCtrl', [
        'diaryService',
        function(diaryService) {
            var vm = this;

            var loadEntries = function(userId) {
                diaryService.get(userId, function (result) {
                    vm.entries = result;
                });
                console.log(vm.entries);
            }

            vm.entries = [];

            loadEntries(6);
        }
    ]);
=======
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
>>>>>>> origin/master
