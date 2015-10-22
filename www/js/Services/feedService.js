angular.module('starter.services')
    .factory("feedService", [
        "$http",
        "$log",
        "ApiEndpoint", function ($http, $log, ApiEndpoint) {
            var feedEndpoint = ApiEndpoint.connectApiUrl + '/feed/api/feed';
            //var feedEndpoint = "http://localhost:8100/feedTest"

            var onError = function (e) {
                $log.error(e.msg);
            };

            var getFeed = function (page, onSuccess) {
                $http.get(feedEndpoint + "/collection?page=" + page)
                    .then(onSuccess, onError);
            }
            
            return {
                "get": getFeed,
            };
        }
    ]);