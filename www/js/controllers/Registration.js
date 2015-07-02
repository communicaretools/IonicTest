angular.module('starter.controllers')
    .controller('RegistrationCtrl', [
        '$scope', 'registrationService', 'preferenceService', function ($scope, registrationService, preferenceService) {
        var loadList = function() {
            registrationService.getList(function (result) {
                console.log(result);
                $scope.list = result;
            });
        };

        $scope.dateFormat = preferenceService.getDateFormat();

        $scope.list = [];
        loadList();
    }
    ]);