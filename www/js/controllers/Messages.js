angular.module('starter.controllers')
    .controller('MessagesCtrl', [
        '$scope',
        '$state',
        'messagesService',
        function ($scope, $state, messagesService) {
            var box = $state.current.name.split(/[.]+/).pop();

            var loadMessages = function (box, page) {
                page = page == null ? 1 : page;
                messagesService.getList(box, page, function (result) {
                    $scope.messages = result;
                });
            };

            $scope.messages = [];

            loadMessages(box);
        }
    ]);