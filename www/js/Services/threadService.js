angular.module('starter.services')
	.factory('threadService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var forumEndpoint = ApiEndpoint.connectApiUrl + '/forum/api/thread';
        //var forumEndpoint = "http://localhost:8100/threadTest"
        
		var onError = function (e) {
		    $log.error(e.msg);
		};
		
		var addThread = function (threadId, entry) {
			var entries = getEntries(threadId);
			entries.push({
				date: new Date(),
				content: entry.content,
				quoteText: entry.quoteText
			});
		};

		var getThreads = function (forumId, onSuccess) {
		    $http.get(forumEndpoint + "/collection/" + forumId).then(function (result) {
		        onSuccess(result.data);
		    }, onError);
		};

		return {
			"add": addThread,
			"get": getThreads
		};
	}]);