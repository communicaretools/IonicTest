angular.module('starter.controllers')
    .controller('DiaryEntryCtrl', [
        '$state',
        '$stateParams',
        '$localStorage',
        'diaryService',
        'autosaveService',
        function($state, $stateParams, $localStorage, diaryService, autosaveService) {
            var vm = this;
            vm.entry = {content: '', mood: ''}

            vm.cancel = function() {
                $state.go('home.diary.list');
            };

            vm.addEntry = function() {
                entry.patientId = $localStorage.user.userId;

                diaryService.add(vm.entry, function () {
                    autosaveService.delete("Diary", function () {
                        $state.go('home.diary.list');
                    });
                });
            };

            vm.startEntry = function() {
                autosaveService.get("Diary", function (result) {
                    vm.entry.content = result.data.content;
                    vm.entry.mood = result.data.mood;
                });
            }
        }
    ]);