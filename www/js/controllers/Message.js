angular.module('starter.controllers')
    .controller('MessageCtrl', [
        '$scope',
        '$stateParams',
        '$ionicLoading',
        'resources',
        'messagesService',
        function ($scope, $stateParams, $ionicLoading, resources, messagesService) {
            var messageId = $stateParams.messageId;

            var loadMessage = function (id) {
                $ionicLoading.show({ template: resources.get('loading') });
                messagesService.get(id, function(result) {
                    $scope.message = result;
                    $ionicLoading.hide();
                });
            };

            $scope.message = {};

            resources.load().then(function () {
                loadMessage(messageId);
                $scope.title = resources.get("messageTitle");
            });
        }
    ]);