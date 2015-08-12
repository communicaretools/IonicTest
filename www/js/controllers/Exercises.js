angular.module('starter.controllers')
    .controller('ExercisesCtrl', [
        '$scope',
    '$ionicModal',
        'resources',
        function($scope, 
    $ionicModal,
    resources) {

        //hardcoded data
        $scope.exercisesTemporaryList = [
            {
                name: 'Exercise 1',
                id: '1',
                desc: 'Natoque platea adipiscing ridiculus scelerisque a! Nunc odio mid, enim dignissim vut odio in scelerisque, penatibus rhoncus magna mauris, mauris sed nisi risus phasellus eros tincidunt lorem sociis augue enim.'
            },
            {
                name: 'Exercise 2',
                id: '2',
                desc: 'Natoque platea adipiscing ridiculus scelerisque a! Nunc odio mid, enim dignissim vut odio in scelerisque, penatibus rhoncus magna mauris, mauris sed nisi risus phasellus eros tincidunt lorem sociis augue enim.'
            }                
        ];

        //Create Modal
        $ionicModal.fromTemplateUrl('templates/modal-exerciseView.html', function(modal) {
            $scope.exerciseModal = modal;
          }, {
            scope: $scope,
            animation: 'slide-in-up'
          });

        $scope.openExercise = function(id, name) {
          console.log(name);
          $scope.exerciseName=name;
          $scope.exerciseModal.show();
        };

        // Close the new task modal
        $scope.closeExercise = function() {
          $scope.exerciseModal.hide();
        };

      }
    ]);

