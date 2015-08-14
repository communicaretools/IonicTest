angular.module('starter.controllers')
    .controller('MessageComposeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'messagesService',
        function ($scope, $state, $stateParams, messagesService) {
            $scope.cancel = function() {
                $state.go('home.messages.inbox');
            };

            $scope.addEntry = function(content, subject) {
                var newMessage = {
                    rawcontent: content,
                    subject: subject
                };
                messagesService.add(newMessage, function () {
                    $state.go('home.messages.outbox');
                });
            };
        }
    ]);