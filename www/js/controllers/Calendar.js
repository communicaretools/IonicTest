angular.module('starter.controllers')
	.controller('CalendarCtrl', [
		'$scope',
		'$log',
		'$ionicPlatform',
		'$ionicLoading',
		'$cordovaCalendar',
		function ($scope, $log, $ionicPlatform, $ionicLoading, $cordovaCalendar) {
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
					$ionicLoading.show({template:'Please wait'});
					$cordovaCalendar.createEventInteractively(options)
						.then(function() {
							$log.log("success");
							$ionicLoading.hide();
						}, function(err) {
							$ionicLoading.hide();
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