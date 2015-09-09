angular.module('starter.services')
	.factory('diaryService', [
<<<<<<< HEAD
		'$http', 'ApiEndpoint',
		function ($http, ApiEndpoint) {
=======
		'$http',
		'$log',
		function($http, $log) {
			var onError = function (e) {
				$log.error(e.msg);
			};

>>>>>>> origin/master
			var addEntry = function () {

			};

			var updateEntry = function () {

			};

<<<<<<< HEAD
			var getEntries = function (userId, onSuccess) {
			    $http.get(ApiEndpoint.connectApiUrl+/diary/collection/+userId).then(function(result) {
			        onSuccess(result.data);
			    })
=======
			var getEntries = function(userId, onSuccess) {
				//var urlRoot ="http://sps.rr-research.no/test/connectApi/api";
				//$http.get(urlRoot+ "diary/"+ userId).then(onSuccess, onError);

				var entries = [
				{
					date: "2014",
					content: "Hallo"
				},
				{
					date: "2015",
					content: "Hei"
				}];
				return entries;
>>>>>>> origin/master
			};
			return {
				"get": getEntries,
				"post": addEntry,
				"updateEntry": updateEntry
			};
	}]);