angular.module('starter.services').factory('diaryService', function () {
	var sayHello = function () {
		console.log("Hello");
	};
	return {
		"hello": sayHello
	};
});