angular.module('starter.controllers')
    .controller('NewRegCtrl', [
        '$scope', '$stateParams', '$state', 'registrationService', function($scope, $stateParams, $state, registrationService) {
            $scope.newReg = {
                text: '',
                imageIndex: -1
            };
            console.log("I have been initialized");
            $scope.numberOfTimes=function(n){
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