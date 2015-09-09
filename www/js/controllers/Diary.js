angular.module('starter.controllers')
    .controller('DiaryCtrl', [
        'diaryService',
        function(diaryService) {
            var vm = this;

            var loadEntries = function(userId) {
                diaryService.get(userId, function(result) {
                    vm.entries = result;
                });
                console.log(vm.entries);
            }

            vm.entries = [];

            loadEntries(6);
        }
    ]);
