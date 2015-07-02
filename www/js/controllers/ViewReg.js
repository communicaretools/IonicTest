angular.module('starter.controllers')
    .controller('ViewRegCtrl', [
        '$scope', '$stateParams', '$state', 'registrationService', function ($scope, $stateParams, $state, registrationService) {
            var regId = $stateParams.regId;
            var regType = $stateParams.type;

            var loadRegistration = function (type, id) {
                registrationService.get(type, id, function (result) {
                    $scope.reg = result.data;
                    $scope.reg.type = $stateParams.type;
                });
            };
            $scope.reg = {};
            loadRegistration(regType, regId);
        }
    ]);