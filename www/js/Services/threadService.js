angular.module('starter.services')
	.factory('threadService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var forumId = 2;

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

		var transform = function (list) {
		    return list.map(function (entry) {
		        var parts = entry.links[0].href.split("/");
		        var id = parts[parts.length - 1];
		        return angular.extend(entry, { "id": id });
		    });
		};

		var getThreads = function (onSuccess){
		    $http.get(ApiEndpoint.url + "/forum/" + forumId).then(function (result) {
		        onSuccess(transform(result.data["forum-threads"]));
		    }, onError);
		};

		return {
			"add": addThread,
			"get": getThreads
		};
	}]);