angular.module('starter.controllers')
    .controller('VideoCtrl', [
        '$scope',
        'resources',
        function ($scope, resources) {
            resources.load().then(function () {
                $scope.title = resources.get("videoTitle");
            });
        }
    ]);
