angular.module('starter.services')
	.factory('diaryService', [
		'$http',
		'$log',
		function($http, $log) {
			var onError = function (e) {
				$log.error(e.msg);
			};

			var addEntry = function () {

			};

			var updateEntry = function () {

			};

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
			};
			return {
				"get": getEntries,
				"post": addEntry,
				"updateEntry": updateEntry
			};
	}]);