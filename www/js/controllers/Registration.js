angular.module('starter.controllers')
    .controller('RegistrationCtrl', [
        '$scope',
        'registrationService',
        'preferenceService',
        function($scope, registrationService, preferenceService) {
            var loadList = function() {
                registrationService.getList(function (result) {
                    $scope.dateFormat = preferenceService.getDateFormat();
                    $scope.list = result;
                });
            };

            $scope.list = [];
            loadList();
        }
    ]);