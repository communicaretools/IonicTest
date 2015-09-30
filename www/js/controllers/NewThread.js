angular.module('starter.controllers')
    .controller('NewThreadCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'threadService',
        'autosaveService',
        function($scope, $state, $stateParams, threadService, autosaveService) {
            function goToList()
            {
                $state.go('home.forum.list');
            }

            $scope.cancel = function () {
                autosaveService.delete("ForumThread", function () {
                    goToList();
                });
            };

            $scope.startThread = function() {
                $scope.thread = { content: '', subject: '' };
                autosaveService.get("ForumThread", $stateParams.forumId, function (result) {
                    if (result) {
                        $scope.thread.content = result.data.content;
                        $scope.thread.subject = result.data.subject;
                    }
                });
            }

            $scope.addThread = function() {
                var newThread = {
                    'thread-name': $scope.thread.subject,
                    'entry-content': $scope.thread.content
                };
                threadService.add($stateParams.forumId, newThread, function () {
                    autosaveService.delete("ForumThread", $stateParams.forumId, function () {
                        goToList();
                    });
                });
            };

            $scope.saveThread = function () {
                autosaveService.save("ForumThread", $stateParams.forumId, $scope.thread, function () {
                    goToList();
                })
            }
        }
    ]);