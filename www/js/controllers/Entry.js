angular.module('starter.controllers')
    .controller('EntryCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'resources',
        'entryService',
        function($scope, $state, $stateParams, resources, entryService) {
            if (entryService.getSelected()) {
                $scope.toQuote = entryService.getSelected();
                entryService.selectEntry();
            }

            resources.load().then(function () {
                $scope.title = resources.get("forumNewEntryTitle");
            });

            $scope.cancel = function() {
                $state.go('home.thread.list');
            };

            $scope.addEntry = function(entry) {
                var newEntry = {
                    content: entry,
                    toQuote: $scope.toQuote
                };
                entryService.add($stateParams.threadId, newEntry, function() {
                    $state.go('home.thread.list');
                });
            };
        }
    ]);