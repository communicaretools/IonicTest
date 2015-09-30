angular.module('starter.services')
	.factory('threadService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var forumThreadEndpoint = ApiEndpoint.connectApiUrl + '/forum/api/thread';
	    //var forumThreadEndpoint = "http://localhost:8100/threadTest"
        
		var onError = function (e) {
		    $log.error(e.msg);
		};
		
		var addThread = function (forumId, thread, onSuccess) {
		    $http.post(forumThreadEndpoint + "/collection/" + forumId, thread)
                .then(onSuccess, onError);
		};

		var getThreads = function (forumId, onSuccess) {
		    $http.get(forumThreadEndpoint + "/collection/" + forumId).then(function (result) {
		        onSuccess(result.data);
		    }, onError);
		};

		return {
			"add": addThread,
			"get": getThreads
		};
	}]);