angular.module('starter.controllers')
    .controller('CameraCtrl', [
        '$scope',
        'Camera',
        function ($scope, Camera) {
            var setPhoto = function(imageURI) {
                console.log(imageURI);
                $scope.imageURI = imageURI;
            };

            var reportError = function(err) {
                console.err(err);
            };

            $scope.getPhoto = function() {
                Camera.getPicture().then(setPhoto, reportError);
            };
        }
    ]);
