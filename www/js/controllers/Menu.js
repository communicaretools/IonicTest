angular.module('starter.controllers')
	.controller('MenuCtrl', ['$scope', 'loginManager', function ($scope, loginManager) {
        $scope.activeState = "";
        $scope.menuItems = [
            {
                state: "home.forum",
                name:"Forum"
            },
            {
                state: "home.registration.list",
                name:"Registreringer"
            },
            {
                state: "home.account",
                name:"Kontoinnstillinger"
            },
            {
                state: "home.messages",
                name:"Meldinger"
            },
            {
                state: "home.camera",
                name:"Kamera"
            },
            {
                state: "home.video",
                name:"Video"
            },
            {
                state: "home.login",
                name: "Logg ut"
            }
        ];

        if (typeof $scope.isLoggedIn === "undefined") {
            loginManager.options(function(data) {
                $scope.isLoggedIn = data.isLoggedIn;
            });
        };
        $scope.$on("logInChange", function (e, status) {
            $scope.isLoggedIn = status;
            }
        );     

        $scope.setActiveState = function(state) {
            $scope.activeState = state;
        };


}]);