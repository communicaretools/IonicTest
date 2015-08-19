angular.module('starter.controllers')
    .controller('AccountCtrl', [
        '$scope',
        '$localStorage',
        '$ionicModal',
        'preferenceService',
        'profileManager',
        function ($scope, $localStorage, $ionicModal, preferenceService, profileManager) {
            $scope.dateFormat = preferenceService.getDateFormat();
            $scope.avatar = $localStorage.user.avatar;

            $scope.updateFormat = function (format) {
                preferenceService.updateFormat(format);
            };

            $scope.selectAvatar = function(selected) {
                profileManager.saveAvatar(selected, function () {
                    profileManager.getAvatar(function(result) {
                        $localStorage.user.avatar = result.data;
                        $scope.avatar = result.data;
                    });
                    $scope.closeModal();
                });
            };

            $scope.openModal = function () {
                profileManager.avatarList(function(result) {
                    $scope.modal.list = result.data.avatars;
                });
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });

            $ionicModal.fromTemplateUrl('avatar-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
        }
    ]);
