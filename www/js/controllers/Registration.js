angular.module('starter.controllers')
    .controller('RegistrationCtrl', [
        '$scope',
        'resources',
        'registrationService',
        'preferenceService',
        function($scope, resources, registrationService, preferenceService) {
            var loadList = function() {
                registrationService.getList(function(result) {
                    $scope.list = result;
                });
            };

            resources.load().then(function () {
                $scope.titleList = resources.get("registrationListTitle");
                $scope.titleDaily = resources.get("registrationNewDailyTitle");
                $scope.titleSmiley = resources.get("registrationNewSmileyTitle");
            });

            $scope.dateFormat = preferenceService.getDateFormat();

            $scope.list = [];
            loadList();
        }
    ]);