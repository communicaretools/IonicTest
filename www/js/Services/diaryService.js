angular.module('starter.services')
	.factory('diaryService', [
		'$http', 'ApiEndpoint',
		function ($http, ApiEndpoint) {

			var addEntry = function () {

			};

			var updateEntry = function () {
                
			};

			var getEntries = function (userId, onSuccess) {
			    $http.get(ApiEndpoint.connectApiUrl+'/diary/collection/'+userId).then(function(result) {
			        onSuccess(result.data);
			    })
			};
			return {
				"get": getEntries,
				"post": addEntry,
				"updateEntry": updateEntry
			};
	}]);