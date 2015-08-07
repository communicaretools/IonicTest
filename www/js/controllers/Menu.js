angular.module('starter.controllers')
	.controller('MenuCtrl', ['$scope', 'loginManager', '$state', function ($scope, loginManager, $state) {


        $scope.menuItems=[
            {
                state: "forum",
                name: "Forum"},
            {
                state: "registration",
                name: "Registreringer"},
            {
                state: "account",
                name: "Instillnger",
            },
            {
                state: "messages",
                name: "Meldinger"},
            {
                state: "camera",
                name: "Kamera"},
            {
                state: "video",
                name:"Video"},
            {
                state: "login",
                name:"Logg ut"},
        ]

        
        console.log($scope.menuItems);

        if (typeof $scope.isLoggedIn === "undefined") {
            loginManager.options(function(data) {
                $scope.isLoggedIn = data.isLoggedIn;
            })
        }
	    $scope.$on("logInChange", function (e, status) {
        console.log(status);
        $scope.isLoggedIn = status;

        
        $activeState="";

        $scope.setActiveState=function (stat) {
            activeState=stat;
            console.log("test");
        }
    });
}]);