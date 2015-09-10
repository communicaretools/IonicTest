angular.module('starter.controllers')
    .controller('DiaryCtrl', [
        '$localStorage', 'diaryService', 'preferenceService',
        function ($localStorage, diaryService, preferenceService) {
            var vm = this;

            var loadEntries = function () {
                var userId = $localStorage.user.userId
                diaryService.get(userId, function(result) {
                    vm.entries = result;
                });
            }
            
            vm.dateFormat = preferenceService.getDateFormat();

            vm.entries = [];

            loadEntries();
        }
    ]);
