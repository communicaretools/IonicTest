angular.module('starter.controllers')
    .controller('MessageComposeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'messagesService',
        function ($scope, $state, $stateParams, messagesService) {
            var message = function() {
                return {
                    id: $scope.message.id,
                    rawcontent: $scope.message.content,
                    subject: $scope.message.subject
                }
            }

            $scope.cancel = function () {
                $scope.message = {};
                $state.go('home.messages.inbox');
            };

            $scope.empty = function() {
                $scope.message = {}
            };

            $scope.addEntry = function() {
                var newMessage = message();
                messagesService.add(newMessage, function () {
                    $state.go('home.messages.outbox');
                });
            };

            $scope.saveDraft = function () {
                var newMessage = message();
                messagesService.saveDraft(newMessage, function () {
                    $state.go('home.messages.drafts');
                });
            }

            $scope.message = {};
            if ($stateParams.messageId && $stateParams.messageId != null) {
                messagesService.get($stateParams.messageId, function (result) {
                    $scope.message.id = result.id,
                    $scope.message.content = result.content,
                    $scope.message.subject = result.subject
                })
            }
        }
    ]);