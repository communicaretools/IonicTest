angular.module('starter.controllers')
    .controller('MessagesCtrl', [
        '$scope',
        '$state',
        'resources',
        'messagesService',
        function ($scope, $state, resources, messagesService) {
            var box = $state.current.name.split(/[.]+/).pop();

            var loadMessages = function (box) {
                messagesService.getList(box, function(result) {
                    $scope.messages = result;
                });
            };

            $scope.messages = [];

            resources.load().then(function () {
                $scope.title = resources.get("messagesTitle");

                loadMessages(box);
            });

        }
    ]);