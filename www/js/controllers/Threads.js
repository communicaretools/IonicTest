angular.module('starter.controllers')
    .controller('ThreadsCtrl', [
        '$scope',
        'resources',
        'threadService',
        function($scope, resources, threadService) {
            var loadThreads = function() {
                threadService.get(function (result) {
                    $scope.threads = result;
                });
            };
            resources.load().then(function () {
                $scope.title = resources.get("forumThreadsTitle");
                loadThreads();
            });
            $scope.threads = [];

        }
    ]);