angular.module('starter.controllers')
    .controller('MessagesCtrl', [
        '$scope',
        '$state',
        'messagesService',
        function ($scope, $state, messagesService) {
            var box = $state.current.name.split(/[.]+/).pop();

            var loadMessages = function (box) {
                messagesService.getList(box, function (result) {
                    $scope.messages = result;
                });
            };

            $scope.messages = [];

            loadMessages(box);
        }
    ]);