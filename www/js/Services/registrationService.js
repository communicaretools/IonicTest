angular.module('starter.services')
	.factory('registrationService', ['$http', '$log', 'ApiEndpoint', function ($http, $log, ApiEndpoint) {
	    var onError = function (e) {
		    $log.error(e.msg);
	    };

	    var add = function (type, entry, onSuccess) {
	        $http.post(ApiEndpoint.url + "/register/" + type, entry).then(onSuccess, onError);
	    };

		var transform = function (list) {
		    return list.map(function (entry) {
		        var parts = entry.links[0].href.split("/");
		        var id = parts[parts.length - 1];
		        return angular.extend(entry, { "id": id });
		    });
		};

		var getList = function (onSuccess){
		    $http.get(ApiEndpoint.url + "/register/list").then(function (result) {
		        onSuccess(transform(result.data["registrations"]));
		    }, onError);
		};

        var getReg = function(type, id, onSuccess) {
            $http.get(ApiEndpoint.url + "/register/" + type + "/" + id).then(onSuccess, onError);
        }

		return {
		    "add": add,
		    "getList": getList,
            "get": getReg
		};
	}]);