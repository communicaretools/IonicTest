angular.module('starter.controllers')
    .controller('ForumEntryCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'entryService',
        'autosaveService',
        function ($scope, $state, $stateParams, entryService, autosaveService) {
            function goToList() {
                $state.go('home.thread.list');
            }
            
            $scope.cancel = function () {
                autosaveService.delete("Forum", $stateParams.threadId, function () {
                    goToList();
                });
            };

            $scope.startEntry = function() {
                $scope.entry = { content: ''};
                if (entryService.getSelected()) {
                    $scope.toQuote = entryService.getSelected();
                    entryService.selectEntry();
                }
                autosaveService.get("Forum", $stateParams.threadId, function (result) {
                    if (result) {
                        $scope.entry.content = result.data.content;
                    }
                });
            }

            $scope.addEntry = function() {
                var newEntry = {
                    content: $scope.entry.content,
                    toQuote: $scope.toQuote
                };
                entryService.add($stateParams.threadId, newEntry, function () {
                    autosaveService.delete("Forum", $stateParams.threadId, function () {
                        goToList();
                    });
                });
            };

            $scope.saveEntry = function () {
                console.log($scope.entry);
                autosaveService.save("Forum", $stateParams.threadId, $scope.entry, function () {
                    goToList();
                });
            }
        }
    ]);