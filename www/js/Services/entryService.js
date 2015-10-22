angular.module('starter.services')
	.factory('entryService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var forumEntryEndpoint = ApiEndpoint.connectApiUrl + '/forum/api/entry';
	    //var forumEntryEndpoint = "http://localhost:8100/entryTest"
        
	    var selected;

	    var onError = function (e) {
	        $log.error(e.msg);
	    };

	    var quoteWrap = function (toQuote) {
	        return "[quote " + "user=\'" + toQuote.author + "\']" + toQuote.content + "[/quote]";
	    };

	    var addEntry = function (threadId, entry, onSuccess) {
	    	var postContent = entry.toQuote ?
	    	{ "entry-content": quoteWrap(entry.toQuote) +" "+ entry.content }:
	    	{"entry-content" : entry.content};
	        $http.post(forumEntryEndpoint + "/collection/" + threadId, postContent)
                .then(onSuccess, onError);
	    };

	    var getEntries = function (threadId, onSuccess) {
	        $http.get(forumEntryEndpoint + "/collection/" + threadId).then(function (result) {
	            onSuccess(result.data["entries"])
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