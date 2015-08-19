angular.module('starter.controllers')
    .controller('ExercisesCtrl', [
        '$scope',
        'exercisesService',
        'resources',
        function($scope,
            exercisesService,
            resources) {

            //hardcoded data
            $scope.exercisesTemporaryList = exercisesService.load();

            $scope.fvExerciseList=[];
        }
    ]);

