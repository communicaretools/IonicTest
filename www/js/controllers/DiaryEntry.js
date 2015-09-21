angular.module('starter.controllers')
    .controller('DiaryEntryCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        '$localStorage',
        'diaryService',
        function($scope, $state, $stateParams, $localStorage, diaryService) {

            $scope.cancel = function() {
                $state.go('home.diary.list');
            };

            $scope.addEntry = function(content) {
                var newEntry = {
                    content: content,
                    mood: -1,
                    patientId: $localStorage.user.userId
                };

                diaryService.add(newEntry, function() {
                    $state.go('home.diary.list');
                });
            };
        }
    ]);