angular.module('starter.controllers')
    .controller('ThreadsCtrl', [
        '$scope', '$http', '$log', 'ApiEndpoint', function($scope, $http, $log, ApiEndpoint) {
            var onError = function(e) {
                $log.error(e.msg);
            };

            var transform = function(threads) {
                return threads.map(function(t) {
                    var parts = t.links[0].href.split("/");
                    var id = parts[parts.length - 1];
                    return angular.extend(t, { "id": id });
                });
            };
            var loadThreads = function(id) {
                $http.get(ApiEndpoint.url + "/forum/" + id).then(function(result) {
                    $scope.threads = transform(result.data["forum-threads"]);
                }, onError);
            };
            $scope.threads = [];
            loadThreads(2);
        }
    ]);