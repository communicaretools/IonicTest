angular.module('starter.controllers')
    .controller('MessagesCtrl', [
        '$scope',
        'resources',
        'messagesService',
        function ($scope, resources, messagesService) {
            var loadMessages = function() {
                messagesService.getList(function(result) {
                    $scope.messages = result;
                });
            };

            resources.load().then(function () {
                $scope.title = resources.get("messagesTitle");
            });

            $scope.messages = [];

            loadMessages();
        }
    ]);