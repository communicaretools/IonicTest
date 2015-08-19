angular.module('starter.services')
    .factory("profileManager", [
        "$http",
        "$log",
        "ApiEndpoint", function ($http, $log, ApiEndpoint) {
            var onError = function (e) {
                $log.error(e.msg);
            };

            var getUser = function (onSuccess) {
                $http.get(ApiEndpoint.url + "/profile/userdata")
                    .then(onSuccess, onError);
            };

            var getAvatar = function(onSuccess) {
                $http.get(ApiEndpoint.url + "/profile/avatar")
                    .then(onSuccess, onError);
            }

            var avatarList = function(onSuccess) {
                $http.get(ApiEndpoint.url + "/profile/avatarList")
                    .then(onSuccess, onError);
            }
            
            var saveAvatar = function (avatar, onSuccess) {
                $http.post(ApiEndpoint.url + "/profile/avatarList", { 'avatar': avatar })
                    .then(onSuccess, onError);
            }

            return {
                "get": getUser,
                "getAvatar": getAvatar,
                "saveAvatar": saveAvatar,
                "avatarList": avatarList
            };
        }
    ]);