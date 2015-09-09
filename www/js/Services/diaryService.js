angular.module('starter.services')
	.factory('diaryService', [
		'$http', '$log', 'ApiEndpoint',
		function ($http, $log, ApiEndpoint) {

		    var onError = function (e) {
		        $log.error(e.msg);
		    };

		    var addEntry = function (entry, onSuccess) {
		        console.log(entry);
		        $http.post(ApiEndpoint.connectApiUrl + '/diary/collection', entry)
                    .then(onSuccess, onError);
		    };

			var updateEntry = function () {
                
			};

			var getEntries = function (userId, onSuccess) {
			    $http.get(ApiEndpoint.connectApiUrl + '/diary/collection/' + userId)
			        .then(function(result) {
			            onSuccess(result.data);
			        });
			};
			return {
				"get": getEntries,
				"add": addEntry,
				"updateEntry": updateEntry
			};
	}]);