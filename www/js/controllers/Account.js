angular.module('starter.controllers')
    .controller('AccountCtrl', [
        '$scope', 'preferenceService',
        function ($scope, preferenceService) {
            $scope.dateFormat = preferenceService.getDateFormat();

            $scope.updateFormat = function(format) {
                preferenceService.updateFormat(format);
            };
        }
    ]);
