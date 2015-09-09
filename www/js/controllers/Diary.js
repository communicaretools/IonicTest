angular.module('starter.controllers')
    .controller('DiaryCtrl', [
        '$localStorage', 'diaryService',
        function ($localStorage, diaryService) {
            var vm = this;

            var loadEntries = function () {
                var userId = $localStorage.user.userId
                diaryService.get(userId, function(result) {
                    vm.entries = result;
                });
            }

            vm.entries = [];

            loadEntries();
        }
    ]);
