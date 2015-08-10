angular.module('starter.controllers')
    .controller('NewRegCtrl', [
        '$scope',
        '$stateParams',
        '$state',
        'resources',
        'registrationService',
        function ($scope, $stateParams, $state, resources, registrationService) {

            resources.load().then(function () {
                $scope.titleSmiley = resources.get("registrationNewSmileyTitle");
                $scope.titleDaily = resources.get("registrationNewDailyTitle");
            });

            $scope.newReg = {};
            $scope.numberOfTimes = function(n) {
                return new Array(n + 1);
            };

            $scope.selectSmiley = function(index) {
                $scope.newReg.imageIndex = index;
            };

            $scope.sendRegistration = function(type) {
                registrationService.add(type, $scope.newReg, function() {
                    $state.go("home.registration.list");
                });
            };
        }
    ]);