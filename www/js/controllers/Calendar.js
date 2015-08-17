angular.module('starter.controllers')
	.controller('CalendarCtrl', [
		'$scope',
		'$log',
		'$cordovaCalendar',
		function ($scope, $log, $cordovaCalendar) {
			$scope.options = {};

			var onError = function (e) {
				$log.error(e.msg);
			};

			$scope.addEvent = function (options) {
				$log.log("Creating event...");
				$cordovaCalendar.createEventInteractively(options)
					.then(function(result) {
						$log.log(result);
					}, function(err) {
						onError(err);
					});
			};

			$scope.clear = function() {
				$scope.options = {};
			};

		}
	]);



	/*
 $cordovaCalendar.createEventInteractively({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });
	*/