angular.module('starter.services')
	.factory('messagesService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {

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

        var startMessage = function(onSuccess) {
            $http.get(ApiEndpoint.url + "/commonmessages/send/").then(onSuccess, onError)
        }

	    var add = function (msg, onSuccess) {
	        $http.post(ApiEndpoint.url + "/commonmessages/send/", msg)
                .then(onSuccess, onError);
	    };

        var saveDraft = function (msg, onSuccess) {
            $http.post(ApiEndpoint.url + "/commonmessages/drafts/", msg)
                .then(onSuccess, onError);
	    };

		var getList = function (box, onSuccess) {
		    $http.get(ApiEndpoint.url + "/commonmessages/"+box+"/").then(function (result) {
		        onSuccess(transform(result.data["messages"]));
		    }, onError);
		};

        var getMessage = function (messageId, onSuccess) {
		    $http.get(ApiEndpoint.url + "/commonmessages/" + messageId).then(function (result) {
		        onSuccess(result.data)
		    }, onError);
		};

		return {
		    "add": add,
		    "get": getMessage,
		    "getList": getList,
		    "saveDraft": saveDraft,
            "start": startMessage
		};
	}]);