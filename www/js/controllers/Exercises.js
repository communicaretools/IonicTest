angular.module('starter.controllers')
    .controller('ExercisesCtrl', [
        '$scope',
        'resources',
        function($scope, resources) {
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

        }
    ])

.controller('ExerciseCtrl', [
    '$scope', 
    '$ionicModal',
    function($scope, $ionicModal) {

      // Create and load the Modal
      $ionicModal.fromTemplateUrl('templates/modal-exerciseView.html', function(modal) {
        $scope.exerciseModal = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      });

      // Open our new task modal
      $scope.openExercise = function() {
        console.log("Modal");
        $scope.exerciseModal.show();
      };

      // Close the new task modal
      $scope.closeExercise = function() {
        $scope.exerciseModal.remove();
      };
    }]
);