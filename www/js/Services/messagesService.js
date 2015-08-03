angular.module('starter.services')
	.factory('messagesService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var onError = function (e) {
		    $log.error(e.msg);
	    };

	    //TODO
	    var add = function (type, entry, onSuccess) {
	        console.log(entry);
	    };

		var transform = function (list) {
		    return list.map(function (entry) {
		        var parts = entry.links[0].href.split("/");
		        var id = parts[parts.length - 1];
		        return angular.extend(entry, { "id": id });
		    });
		};
		/* Old message module */
		var getList = function (onSuccess) {
			console.log(ApiEndpoint);
		    $http.get(ApiEndpoint.url + "/messages/inbox").then(function (result) {
		        onSuccess(transform(result.data["messages"]));
		    }, onError);
		};

		return {
		    "add": add,
		    "getList": getList,
		};
	}]);