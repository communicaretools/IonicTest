angular.module('starter.controllers')
    .controller('ThreadsCtrl', [
        '$scope',
        'threadService',
        function($scope, threadService) {
            var loadThreads = function() {
                threadService.get(function (result) {
                    $scope.threads = result;
                });
            };
            $scope.threads = [];

            loadThreads();

        }
    ]);