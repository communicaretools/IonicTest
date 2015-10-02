angular.module('starter.controllers')
    .controller('MessageComposeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'messagesService',
        'autosaveService',
        function ($scope, $state, $stateParams, messagesService, autosaveService) {
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
                    rawContent: $scope.message.content,
                    subject: $scope.message.subject,
                    inreplyto: $scope.message.inreplyto
                }
            }

            var fetchIds = function (from) {
                if(!from) {return []};
                return from.map(function(obj) {
                    return obj.id;
                });
            }

            var markHelpers = function() {
                var ids = fetchIds($scope.message.receivers);
                $scope.helpers.forEach(function (r) {
                    r.selected = ids.indexOf(r.id) > -1;
                });
            };

            var extractDraft = function(draft) {
                $scope.message = {
                    id: draft.id,
                    content: draft.content,
                    subject: draft.subject,
                    receivers: draft.receivers,
                    inreplyto: draft.inReplyTo ? draft.inReplyTo.id : null
                };
            }

            var fetchDraft = function () {
                var msgId = findMessageId();
                if (msgId == 0) { return; }
                messagesService.get(msgId, function(result) {
                    extractDraft(result);
                    markHelpers();
                });
            }

            var emptyMessage = function() {
                return { id: '', subject: '', content: '', receivers: [], inreplyto: null }
            };
            var findMessageId = function() {
                return $stateParams.messageId && $stateParams.messageId != null
                    ? $stateParams.messageId
                    : 0;
            };
            var init = function () {
                $scope.message = emptyMessage();
                $scope.message.inreplyto = messagesService.getReplyTo();
                $scope.helpers = [];
                messagesService.start(function(result) {
                    $scope.helpers = result.data;
                    fetchDraft();
                });
            };

            init();

            $scope.empty = function () {
                $scope.message = emptyMessage();
                messagesService.selectReplyTo();
                markHelpers();
            };

            $scope.delete = function () {
                if (!$scope.message.id) {
                    $state.go('home.messages.drafts');
                }
                messagesService.deleteDraft($scope.message.id, function () {
                    $state.go('home.messages.drafts', { time: undefined });
                })
            }

            $scope.cancel = function () {
                $state.go('home.messages.inbox', { time: undefined });
                messagesService.selectReplyTo();
            };

            $scope.addEntry = function () {
                messagesService.add(message(), function () {
                    $state.go('home.messages.outbox', { time: undefined });
                    messagesService.selectReplyTo();
                });
            };

            $scope.saveDraft = function () {
                messagesService.saveDraft(message(), function(result) {
                    $state.go('home.messages.drafts', { time: undefined });
                    messagesService.selectReplyTo();
                });
            }

            $scope.autosaveDraft = function () {
                messagesService.saveDraft(message(), function (result) {
                    $scope.message.id = result.data.id;
                })
            }
        }
    ]);