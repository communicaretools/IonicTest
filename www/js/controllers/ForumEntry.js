angular.module('starter.controllers')
    .controller('ForumEntryCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'entryService',
        function($scope, $state, $stateParams, entryService) {
            if (entryService.getSelected()) {
                $scope.toQuote = entryService.getSelected();
                entryService.selectEntry();
            }
            
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