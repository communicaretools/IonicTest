angular.module('starter.services')
    .factory('messagesService', [
        '$http', '$log', 'ApiEndpoint', function($http, $log, ApiEndpoint) {
            var messageEndpoint = ApiEndpoint.connectApiUrl + "/commonMessages/api/commonMessages";

            var onError = function(e) {
                $log.error(e.msg);
            };

            var startMessage = function(onSuccess) {
                $http.get(messageEndpoint + "/send/").then(onSuccess, onError)
            }

            var add = function(msg, onSuccess) {
                $http.post(messageEndpoint + "/send/", msg)
                    .then(onSuccess, onError);
            };

            var saveDraft = function(msg, onSuccess) {
                $http.post(messageEndpoint + "/drafts/", msg)
                    .then(onSuccess, onError);
            };

            var getList = function(box, page, onSuccess) {
                $http.get(messageEndpoint + "/" + box + "?page="+ page).then(function(result) {
                    onSuccess(result.data["messages"]);
                }, onError);
            };

            var getMessage = function(messageId, onSuccess) {
                $http.get(messageEndpoint + "/view/" + messageId).then(function(result) {
                    onSuccess(result.data)
                }, onError);
            };

            return {
                "add": add,
                "get": getMessage,
                "getList": getList,
                "saveDraft": saveDraft,
                "start": startMessage
            };
        }
    ]);