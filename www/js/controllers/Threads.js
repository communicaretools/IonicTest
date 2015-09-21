angular.module('starter.controllers')
    .controller('ThreadsCtrl', [
        '$scope',
        'threadService',
        function($scope, threadService) {
            var onSuccess = function (result) {
                $scope.threads = result.threads;
            };
            var loadThreads = function() {
                threadService.get(onSuccess);
            };
            $scope.threads = [];

            loadThreads();

        }
    ]);