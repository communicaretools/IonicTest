angular.module('starter.services')
    .factory("profileManager", [
        "$http",
        "$log",
        "ApiEndpoint", function ($http, $log, ApiEndpoint) {
            var profileEndpoint = ApiEndpoint.connectApiUrl + '/profile/api/profile';
            var avatarEndpoint = ApiEndpoint.connectApiUrl + '/avatar/api/avatar';
            //var profileEndpoint = "http://localhost:8100/profileTest"
            //var avatarEndpoint = "http://localhost:8100/avatarTest"

            var onError = function (e) {
                $log.error(e.msg);
            };

            var getUser = function (onSuccess) {
                $http.get(profileEndpoint + "/userdata")
                    .then(onSuccess, onError);
            };

            var getAvatar = function (userId, onSuccess) {
                userId = 28;
                $http.get(avatarEndpoint + "/resource/" + userId)
                    .then(onSuccess, onError);
            }

            var avatarList = function(onSuccess) {
                $http.get(avatarEndpoint + "/collection")
                    .then(onSuccess, onError);
            }
            
            var saveAvatar = function (avatar, onSuccess) {
                $http.post(avatarEndpoint + "/resource", { 'avatar': avatar })
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