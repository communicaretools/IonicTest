angular.module('starter.controllers')
    .controller('ThreadCtrl', [
        '$scope', '$stateParams', '$state', '$ionicPopup', 'entryService', 'preferenceService', function ($scope, $stateParams, $state, $ionicPopup, entryService, preferenceService) {

            var threadId = $stateParams.threadId;

            var loadThread = function (id) {
                entryService.get(id, function (result) {
                    $scope.thread = result;
                });
            };

            $scope.dateFormat = preferenceService.getDateFormat();

            $scope.quoteEntry = function (entry) {
                entryService.selectEntry(entry);
                $state.go('home.thread.newEntry');
            };

            $scope.thread = [];
            loadThread(threadId);
        }
    ]);