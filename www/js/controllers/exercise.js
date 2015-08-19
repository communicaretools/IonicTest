angular.module('starter.controllers')
    .controller('ExerciseCtrl', [
        '$scope',
        '$ionicActionSheet',
        'resources',
        function($scope, 
            $ionicActionSheet,
            $ionicModal,
            resources) {

            console.log('ExerciseCtrl');
            $scope.test="This belongs to the ExerciseCtrl";

            $scope.addToFv=function(){
                console.log("addToFv");
            }

             // Triggered on a button click, or some other target
             $scope.showActionSheet = function() {

               // Show the action sheet
               var hideSheet = $ionicActionSheet.show({
                 buttons: [
                   { text: 'Add to favourites' },
                   { text: 'See related exercises' }
                 ],
                 cancelText: 'Cancel',
                 cancel: function() {
                      // add cancel code..
                    },
                 buttonClicked: function(index) {
                   return true;
                 }
               });
             };            

        }
    ]);
