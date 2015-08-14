angular.module('starter.controllers')
    .controller('ViewRegCtrl', [
        '$scope',
        '$stateParams',
        '$state',
        'resources',
        'registrationService',
        function($scope, $stateParams, $state, resources, registrationService) {
            var regId = $stateParams.regId;
            var regType = $stateParams.type;

            var loadRegistration = function(type, id) {
                registrationService.get(type, id, function (result) {
                    $scope.title = resources.get("registrationTitle");
                    $scope.reg = result.data;
                    $scope.reg.type = $stateParams.type;
                    console.log($scope.reg);
                });
            };

            $scope.reg = {};
            loadRegistration(regType, regId);
        }
    ]);