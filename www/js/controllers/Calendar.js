angular.module('starter.controllers')
	.controller('CalendarCtrl', [
		'$scope',
		'$log',
		'$ionicPlatform',
		'$cordovaCalendar',
		function ($scope, $log, $ionicPlatform, $cordovaCalendar) {
			$scope.options = {};
			$scope.options.startDate = new Date();
			$scope.options.endDate = new Date();

			var onError = function (e) {
				$log.error(e.msg);
			};

			$scope.addEvent = function (options) {
				$log.log("Creating event...");
				$ionicPlatform.ready(function() {
					$log.log("Ionic Platform ready.");
					$cordovaCalendar.createEventInteractively(options)
						.then(function(result) {
							$log.log(result);
						}, function(err) {
							onError(err);
						});
				});
				
			};

			$scope.clear = function() {
				$log.log("Clear!");
				$scope.options = {};
				$scope.options.startDate = new Date();
				$scope.options.endDate = new Date();
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