angular.module('starter.controllers')
    .controller('ExerciseCtrl', [
        '$scope',
        '$stateParams',
        '$ionicActionSheet',
        'exercisesService',
        'resources',
        '$state',
        '$ionicHistory',
        '$ionicPopup',
        function($scope,
            $stateParams, 
            $ionicActionSheet,
            exercisesService,
            resources, 
            $state,
            $ionicHistory,
            $ionicPopup) {

            //console.log('ExerciseCtrl');          
            $scope.test="This belongs to the ExerciseCtrl";

            $scope.exTitle=$stateParams.exerciseName;
            $scope.exerciseId=$stateParams.exerciseId;            
            $scope.exercise= exercisesService.getExerciseById($stateParams.exerciseId);


            
            $scope.currentStep="";

            var steps= $scope.exercise.steps;
            $scope.stepNr=0;
            $scope.currentStep=steps[$scope.stepNr];
            //$scope.showPrevious=false;       

           $scope.previousStep=function(nr) {
                if(nr>-1) {
                    $scope.stepNr=nr;
                    $scope.currentStep=steps[nr];
                    $scope.showPrevious=true;
                    console.log(nr);
                }
                else {
                    $scope.showPrevious=false; 
                }

           }
           $scope.nextStep=function(nr) {
                if(nr< steps.length) {
                    $scope.stepNr=nr;
                    $scope.currentStep=steps[nr];
                    console.log(nr);
                }
           }           



            console.log($scope.exercise);

            $scope.addToFv=function(exerciseId){               
                console.log("addToFv");
                $scope.exercise = exercisesService.saveFv($scope.exercise);
                $scope.alertAddToFv(); 
                console.log($scope.exercise);
            };


            $scope.showActionSheet = function() {
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
                    if(index===0) {
                       $scope.addToFv($scope.exerciseId);
                    }
                   return true;
                 }
                });
            }; 

            // Alert add to favourites
             $scope.alertAddToFv = function() {
               var alertPopup = $ionicPopup.alert({
                 title: 'Added ' + $scope.exTitle +' to favourites.',
               });
               alertPopup.then(function(res) {
                 console.log('alert');
                 //$state.go('home.exercises.fvList')
               });
             };  

            $scope.goBackToList=function (){              
                var view=exercisesService.getCurrentView();
                $state.go('home.exercises.'+view);
                              
            }                 
        }
    ]);
