angular.module('starter.controllers')
    .controller('MessageComposeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'messagesService',
        function ($scope, $state, $stateParams, messagesService) {
            var findToSendTo = function () {
                return $scope.helpers.map(
                    function(obj) {
                        return obj.selected ? obj.id : '';
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

            var fetchIds = function(from) {
                return from.map(function(obj) {
                    return obj.id;
                });
            }

            var markHelpers = function() {
                var ids = $scope.message.receivers ? fetchIds($scope.message.receivers) : [];
                $scope.helpers.forEach(function (r) {
                    r.selected = ids.indexOf(r.id) > -1;
                });
            };

            var extractDraft = function(draft) {
                $scope.message = {
                    id: draft.id,
                    content: draft.content,
                    subject: draft.subject,
                    receivers: draft.receivers
                };
            }

            var fetchDraft = function(msgId) {
                messagesService.get($stateParams.messageId, function(result) {
                    extractDraft(result);
                    markHelpers();
                });
            }

            var init = function() {
                $scope.message = {};
                $scope.helpers = [];
                messagesService.start(function(result) {
                    $scope.helpers = result.data;
                    if ($stateParams.messageId && $stateParams.messageId != null) {
                        fetchDraft($stateParams.messageId);
                    }
                });
            };

            init();

            $scope.empty = function () {
                $scope.message = {};
                markReceivers();
            };

            $scope.cancel = function () {
                $scope.message = {};
                $state.go('home.messages.inbox');
            };

            $scope.addEntry = function () {
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
        }
    ]);