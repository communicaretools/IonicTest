angular.module('starter.controllers')
    .controller('ThreadsCtrl', [
        '$scope',
        '$stateParams',
        'resources',
        'threadService',
        function ($scope, $stateParams, resources, threadService) {
            var forumId = $stateParams.forumId;

            var onGetSuccess = function (result) {
                $scope.threads = result.threads;
            };
            var loadThreads = function (forumId) {
                //offscreenBuffering()
                $scope.strings = {
                    'newTab': resources.get("forumNewThread"),
                    'listTab': resources.get("forumThreads")
                }
                threadService.get(forumId, onGetSuccess);
            };
            $scope.threads = [];

            loadThreads(forumId);
        }
    ]);