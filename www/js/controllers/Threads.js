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
            $scope.threads = [];

            resources.load().then(function () {
                loadThreads();
                $scope.title = resources.get("forumThreadsTitle");
            });

        }
    ]);