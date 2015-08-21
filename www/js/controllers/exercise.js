angular.module('starter.controllers')
    .controller('ExerciseCtrl', [
        '$scope',
        '$stateParams',
        '$ionicActionSheet',
        'exercisesService',
        'resources',
        '$state',
        '$ionicPopup',
        function($scope,
            $stateParams, 
            $ionicActionSheet,
            exercisesService,
            resources, 
            $state, 
            $ionicPopup) {

            console.log('ExerciseCtrl');
            $scope.test="This belongs to the ExerciseCtrl";

            $scope.exTitle=$stateParams.exerciseName;

            $scope.exerciseId=$stateParams.exerciseId;
            console.log("Id: "+$scope.exerciseId);

            $scope.exercise={};


            $scope.addToFv=function(exerciseId){
                $scope.exercise= exercisesService.getExerciseById(exerciseId);
                console.log("addToFv");       
                exercisesService.saveFv($scope.exercise);
                $scope.showAlert();               
            };


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

            // An alert dialog
             $scope.showAlert = function() {
               var alertPopup = $ionicPopup.alert({
                 title: 'Added ' + $scope.exTitle +' to favourites',
                 //template: 'Add to favourites'
               });
               alertPopup.then(function(res) {
                 console.log('alert');
                 $state.go('home.exercises.fvList')
               });
             };

        }
    ]);
