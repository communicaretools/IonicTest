angular.module('starter.controllers')
    .controller('MessageComposeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'resources',
        'messagesService',
        function ($scope, $state, $stateParams, resources, messagesService) {
            resources.load().then(function () {
                $scope.title = resources.get("forumNewEntryTitle");
            });

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