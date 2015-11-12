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

            $scope.replyTo = function(msg) {
                messagesService.selectReplyTo(msg);
                $state.go('home.messages.compose');
            }
            $scope.delete = function(msg) {
                messagesService.deleteDraft(msg.id, function() {
                    var index = $scope.messages.indexOf(msg);
                    $scope.messages.splice(index, 1);
                });
            };
        }
    ]);