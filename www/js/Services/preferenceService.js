angular.module('starter.services')
	.factory("preferenceService", function () {
		ampm = false;
		var getDateFormat = function () {
			return ampm ? "hh:mma MM-dd-yyyy": "HH:mm dd-MM-yyyy";
		};

		var updateFormat = function (format) {
			console.log("Format updated to", getDateFormat());
			ampm = format;
		};


		return {
			"getDateFormat": getDateFormat,
			"updateFormat": updateFormat
		};
	});