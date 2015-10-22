angular.module('starter.controllers')
    .controller('ViewRegCtrl', [
        '$scope',
        '$stateParams',
        '$state',
        'resources',
        'registrationService',
        function ($scope, $stateParams, $state, resources, registrationService) {
            var regId = $stateParams.regId;
            var regType = $stateParams.type;

            var loadRegistration = function (type, regId) {
                registrationService.get(type, regId, function (result) {
                    $scope.title = resources.get("registrationTitle");
                    $scope.reg = result.data;
                    $scope.reg.type = $stateParams.type;
                });
            };

            $scope.reg = {};
            loadRegistration(regType, regId);
        }
    ]);