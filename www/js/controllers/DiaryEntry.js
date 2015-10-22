angular.module('starter.controllers')
    .controller('DiaryEntryCtrl', [
        '$state',
        '$stateParams',
        '$localStorage',
        'diaryService',
        'autosaveService',
        function($state, $stateParams, $localStorage, diaryService, autosaveService) {
            var vm = this;

            vm.numberOfTimes = function (n) {
                return new Array(n + 1);
            };

            vm.cancel = function () {
                autosaveService.delete("Diary", 0, function () {
                    $state.go('home.diary.list');
                });
            };

            vm.selectSmiley = function(index) {
                vm.entry.mood = index;
            }

            vm.addEntry = function() {
                vm.entry.patientId = $localStorage.user.userId;

                diaryService.add(vm.entry, function () {
                    autosaveService.delete("Diary", 0, function () {
                        $state.go('home.diary.list');
                    });
                });
            };

            vm.startEntry = function () {
                vm.entry = { content: '', mood: -1 }
                autosaveService.get("Diary", 0, function(result) {
                    if (result) {
                        vm.entry.content = result.data.content;
                        vm.entry.mood = result.data.mood;
                    }
                });
            }

            vm.saveEntry = function() {
                autosaveService.save("Diary", 0, vm.entry, function() {
                    $state.go('home.diary.list');
                })
            }
        }
    ]);