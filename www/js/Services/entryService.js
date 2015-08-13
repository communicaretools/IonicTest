angular.module('starter.services')
	.factory('entryService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var selected;

	    var onError = function (e) {
	        $log.error(e.msg);
	    };

	    var transform = function (list) {
	        return list.map(function (entry) {
	            var parts = entry.links[0].href.split("/");
	            var id = parts[parts.length - 1];
	            return angular.extend(entry, { "id": id });
	        });
	    };
	    var quoteWrap = function (toQuote) {
	        return "[quote " + "user=\'" + toQuote.author + "\']" + toQuote.content + "[/quote]";
	    };

	    var addEntry = function (threadId, entry, onSuccess) {
	    	var postContent = entry.toQuote ?
	    	{ "entry-content": quoteWrap(entry.toQuote) +" "+ entry.content }:
	    	{"entry-content" : entry.content};
	        $http.post(ApiEndpoint.url + "/forum/thread/" + threadId, postContent)
                .then(onSuccess, onError);
	    };

	    var getEntries = function (threadId, onSuccess) {
	        $http.get(ApiEndpoint.url + "/forum/thread/" + threadId).then(function (result) {
	            onSuccess(transform(result.data["entries"]))
	        }, onError);
	    };

	    var selectEntry = function (entry) {
	        selected = entry;
	    };

	    var getSelected = function () {
	        return selected;
	    };

	    return {
	        "add": addEntry,
	        "get": getEntries,
	        "selectEntry": selectEntry,
	        "getSelected": getSelected,
	    };
	}]);