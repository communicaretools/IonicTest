angular.module('starter.services')
    .factory('registrationService', [
        '$http', '$log', 'ApiEndpoint',
        function($http, $log, ApiEndpoint) {
            var registrationEndpoint = ApiEndpoint.connectApiUrl + '/registration/api/registration/';

            var onError = function(e) {
                $log.error(e.msg);
            };

            var add = function(userId, type, entry, onSuccess) {
                $http.post(registrationEndpoint + type + "Collection/" + userId, entry).then(onSuccess, onError);
            };

            var getList = function(userId, onSuccess) {
                $http.get(registrationEndpoint + "collection/" + userId)
                    .then(function(result) {
                        onSuccess(result.data["registrations"]);
                    }, onError);
            };

            var getReg = function(type, regId, onSuccess) {
                $http.get(registrationEndpoint + "/" + type + "/" + regId).then(onSuccess, onError);
            }

            return {
                "add": add,
                "getList": getList,
                "get": getReg
            };
        }
    ]);