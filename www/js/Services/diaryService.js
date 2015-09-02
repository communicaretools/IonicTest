angular.module('starter.services')
	.factory('diaryService', [
		'$http',
		function($http) {
			var addEntry = function () {

			};

			var updateEntry = function () {

			};

			var getEntries = function() {
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