angular.module('starter.controllers')
    .controller('NewRegCtrl', [
        '$scope', '$stateParams', '$state', 'registrationService', function($scope, $stateParams, $state, registrationService) {
        $scope.newReg = {};

            $scope.sendRegistration = function(type) {
                registrationService.add(type, $scope.newReg, function() {
                    $state.go("home.registration.list");
                });
            };
        }
    ]);