angular.module('starter.controllers')
	.controller('MessagesCtrl', [
		'$scope', 'messagesService' , function ($scope, messagesService) {
        	console.log('MessagesCtrl initiated');
    		var loadMessages = function () {
                messagesService.getList(function(result) {
                    $scope.messages = result;
                    console.log($scope.messages);
                });
            };
            $scope.messages = [];

            loadMessages();
    }]);