angular.module('starter.controllers')
    .controller('ThreadCtrl', [
        '$scope', '$stateParams', '$http', '$log', 'ApiEndpoint', function ($scope, $stateParams, $http, $log, ApiEndpoint ) {
            var onError = function (e) {
                $log.error(e.msg);
            };
            var transform = function (entries) {
                return entries.map(function(e) {
                    var parts = e.links[0].href.split("/");
                    var id = parts[parts.length - 1];
                    return angular.extend(e, { "id": id });
                });
            };
            var loadThread = function(id) {
                $http.get(ApiEndpoint.url + "/forum/thread/" + id).then(function(result) {
                    $scope.thread = result;
                    $scope.thread.entries = transform(result.data["entries"]);
                }, onError);
            };

            $scope.thread = {};
            loadThread($stateParams.threadId);
        }
    ]);