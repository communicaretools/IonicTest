angular.module('starter.controllers')
    .controller('ThreadCtrl', [
        '$scope',
        '$stateParams',
        '$state',
        '$ionicLoading',
        'resources',
        'entryService',
        'preferenceService',
        function ($scope, $stateParams, $state, $ionicLoading, resources, entryService, preferenceService) {
            var threadId = $stateParams.threadId;

            var loadThread = function (id) {
                $ionicLoading.show({template: resources.get('loading')});
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
            
            resources.load().then(function () {
                loadThread(threadId);
                $scope.titleEntries = resources.get("forumThreadEntries");
                $scope.titleNewEntry = resources.get("forumThreadNewEntry");
            });
        }
    ]);