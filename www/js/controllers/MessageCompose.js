angular.module('starter.controllers')
    .controller('MessageComposeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'messagesService',
        function ($scope, $state, $stateParams, messagesService) {
            var findToSendTo = function () {
                return $scope.receivers.map(
                    function(obj) {
                         if (obj.selected) {
                             return obj.id
                         } else {
                             return ''
                         }
                    }
                );
            };
            var message = function() {
                return {
                    id: $scope.message.id,
                    receivers: findToSendTo(),
                    rawcontent: $scope.message.content,
                    subject: $scope.message.subject
                }
            }

            $scope.cancel = function () {
                $scope.message = {};
                $state.go('home.messages.inbox');
            };

            $scope.empty = function() {
                $scope.message = {};
                markReceivers();
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
            var fetchIds = function(from) {
                return from.map(function(obj) {
                    return obj.id;
                });
            }
            var markReceivers = function() {
                var ids = $scope.message.receivers ? fetchIds($scope.message.receivers) : [];
                $scope.receivers.forEach(function (r) {
                    r.selected = ids.indexOf(r.id) > -1;
                });
            };

            var init = function() {
                $scope.message = {};
                $scope.receivers = [];
                messagesService.start(function(result) {
                    $scope.receivers = result.data;
                    if ($stateParams.messageId && $stateParams.messageId != null) {
                        messagesService.get($stateParams.messageId, function(result) {
                            $scope.message = {
                                id: result.id,
                                content: result.content,
                                subject: result.subject,
                                receivers: result.receivers
                            };
                            markReceivers();
                        });
                    }
                });
            };


            init();
        }
    ]);