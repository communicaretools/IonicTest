angular.module('starter.controllers')
    .controller('DiaryCtrl', [
        '$localStorage', 'diaryService', 'preferenceService',
        function ($localStorage, diaryService, preferenceService) {
            var vm = this;

            var loadEntries = function() {
                diaryService.get(function(result) {
                    vm.entries = result;
                });
            };
            
            vm.dateFormat = preferenceService.getDateFormat();

            vm.entries = [];

            loadEntries();
        }
    ]);
