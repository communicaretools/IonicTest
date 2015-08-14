angular.module('starter.controllers')
    .controller('CameraCtrl', [
        '$scope',
        'resources',
        'Camera',
        function ($scope, resources, Camera) {
            var setPhoto = function(imageURI) {
                console.log(imageURI);
                $scope.imageURI = imageURI;
            };

            var reportError = function(err) {
                console.err(err);
            };
            resources.load().then(function() {
                $scope.title = resources.get("cameraTitle");
            });
            $scope.getPhoto = function() {
                Camera.getPicture().then(setPhoto, reportError);
            };
        }
    ]);
