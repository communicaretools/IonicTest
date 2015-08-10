angular.module('starter.controllers')
    .controller('ExercisesCtrl', [
        '$scope',
        'resources',
        function($scope, resources) {
            $scope.exercisesTemporaryList = [
                {
                    name: 'Exercise 1',
                    id: '1'
                },
                {
                    name: 'Exercise 2',
                    id: '2'
                }                
            ];

        }
    ]);