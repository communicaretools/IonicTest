angular.module('starter.controllers')
    .controller('ThreadCtrl', [
        '$scope', '$stateParams', '$state','$ionicLoading', 'entryService', 'preferenceService', function ($scope, $stateParams, $state, $ionicLoading, entryService, preferenceService) {
            var threadId = $stateParams.threadId;

            var loadThread = function (id) {
                $ionicLoading.show({template: 'Loading...'});
                entryService.get(id, function (result) {
                    $scope.thread = result;
                    $ionicLoading.hide();
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