angular.module('starter.controllers')
    .controller('NewRegCtrl', [
        '$scope',
        '$stateParams',
        '$state',
        'resources',
        'registrationService',
        function($scope, $stateParams, $state, resources, registrationService) {
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

            resources.load().then(function() {
                $scope.answersOptions = {
                    yes: resources.get('yes'),
                    no: resources.get('no'),
                    notRelevant: resources.get('notRelevant'),
                }
            })
        }
    ]);