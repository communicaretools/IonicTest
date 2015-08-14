angular.module('starter.controllers')
    .controller('MessageCtrl', [
        '$scope',
        '$stateParams',
        '$ionicLoading',
        'messagesService',
        function ($scope, $stateParams, $ionicLoading, messagesService) {
            var messageId = $stateParams.messageId;

            var loadMessage = function (id) {
                $ionicLoading.show({ template: resources.get('loading') });
                messagesService.get(id, function(result) {
                    $scope.message = result;
                    $ionicLoading.hide();
                });
            };

            $scope.message = {};

            loadMessage(messageId);
        }
    ]);