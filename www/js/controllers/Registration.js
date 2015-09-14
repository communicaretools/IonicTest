angular.module('starter.controllers')
    .controller('RegistrationCtrl', [
        '$scope',
        '$localStorage',
        'registrationService',
        'preferenceService',
        function($scope, $localStorage, registrationService, preferenceService) {
            var loadList = function () {
                var userId = $localStorage.user.userId;
                registrationService.getList(userId, function (result) {
                    $scope.dateFormat = preferenceService.getDateFormat();
                    $scope.list = result;
                });
            };

            $scope.list = [];
            loadList();
        }
    ]);