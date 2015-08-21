angular.module('starter.controllers')
    .controller('ExerciseListCtrl', [
        '$scope',
        'exercisesService',
        '$localStorage',
        '$state',
        'resources',
        function($scope,
            exercisesService,
            $localStorage,
            $state,
            resources) {

            $scope.exercisesList=[];
            $scope.fvExercisesList=exercisesService.getFv();

            var loadList =function() {
                exercisesService.getList(function(result) {
                    $scope.exercisesList = result;
                    $localStorage.exList= result;//working!
                });
            };

            loadList();

            $scope.showFvInConsole=function() {
                //console.log($scope.fvExercisesList);
                delete $localStorage.favourites;
                $state.forceReload();
            }



        }
    ]);

