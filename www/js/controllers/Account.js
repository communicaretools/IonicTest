angular.module('starter.controllers')
    .controller('AccountCtrl', [
        '$scope', 'resources', 'preferenceService',
        function ($scope, resources, preferenceService) {

            resources.load().then(function () {
                $scope.title = resources.get("settingsTitle");
                $scope.dateToggle = resources.get("settingsDateFormat");
            });

            $scope.dateFormat = preferenceService.getDateFormat();

            $scope.updateFormat = function(format) {
                preferenceService.updateFormat(format);
            };
        }
    ]);
