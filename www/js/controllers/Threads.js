angular.module('starter.controllers')
    .controller('ThreadsCtrl', [
        '$scope',
        '$stateParams',
        'threadService',
        function ($scope, $stateParams, threadService) {
            var forumId = $stateParams.forumId;

            var onSuccess = function (result) {
                $scope.threads = result.threads;
            };
            var loadThreads = function (forumId) {
                //offscreenBuffering()
                threadService.get(forumId, onSuccess);
            };
            $scope.threads = [];

            loadThreads(forumId);
        }
    ]);