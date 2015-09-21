angular.module('starter.services')
	.factory('diaryService', [
		'$http', '$log', 'ApiEndpoint',
		function ($http, $log, ApiEndpoint) {
		    var diaryEndpoint = ApiEndpoint.connectApiUrl + '/diary/api/diary';
		    //var diaryEndpoint = "http://localhost:8100/diaryTest"

		    var onError = function (e) {
		        $log.error(e.msg);
		    };

		    var addEntry = function (entry, onSuccess) {
		        console.log(entry);
		        $http.post(diaryEndpoint + '/collection', entry)
                    .then(onSuccess, onError);
		    };

		    var updateEntry = function () {

		    };

		    var getEntries = function (onSuccess) {
		        $http.get(diaryEndpoint + '/collection')
			        .then(function (result) {
			            onSuccess(result.data);
			        }, onError);
		    };
		    return {
		        "get": getEntries,
		        "add": addEntry,
		        "updateEntry": updateEntry
		    };
		}]);