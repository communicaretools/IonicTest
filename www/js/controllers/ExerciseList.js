angular.module('starter.controllers')
    .controller('ExerciseListCtrl', [
        '$scope',
        'exercisesService',
        '$localStorage',
        '$state',
        '$ionicActionSheet',
        '$ionicPopup',
        'resources',
        function($scope,
            exercisesService,
            $localStorage,
            $state,
            $ionicActionSheet,
            $ionicPopup,
            resources) {

            $scope.exList=[];
            $scope.fvExList=exercisesService.getFv();

            var loadList =function() {
                exercisesService.getList(function(result) {
                    $scope.exList = result;
                    $localStorage.exList= result;//working!
                });
            };

            // Initialzier
            loadList();

            $scope.cleanFvList=function() {
                //console.log($scope.fvExList);
                delete $localStorage.favourites;
                $state.forceReload();
            }

            $scope.edit=false;
            $scope.editMode =function() {
                console.log("Edit");
                //find a way to make ion-item
                $scope.edit=true;
                //$state.forceReload();
                console.log($scope.edit);
            }

            $scope.showFvSheet = function() {
               var hideSheet = $ionicActionSheet.show({
                    buttons: [
                    { text: 'Edit list' }
                    ],
                    destructiveText: 'Delete all',
                    cancelText: 'Cancel',
                    cancel: function() {
                      // add cancel code..
                    },
                    destructiveButtonClicked: function() {
                        $scope.cleanFvList();
                    },
                    buttonClicked: function(index) {
                        if(index===0) {
                            $scope.editMode();
                        }
                    return true;
                    }
               });
            };

            $scope.showListSheet = function() {
               var hideSheet = $ionicActionSheet.show({
                    buttons: [
                    { text: 'Edit list' }
                    ],
                    destructiveText: 'Delete all',
                    cancelText: 'Cancel',
                    cancel: function() {
                      // add cancel code..
                    },
                    buttonClicked: function(index) {
                    return true;
                    }
               });
            }; 

            // Alert search functionality
             $scope.alertSearch = function() {
               var alertPopup = $ionicPopup.alert({
                 title: 'Go search somewhere else!',
                 //template: 'Add to favourites'
               });
               alertPopup.then(function(res) {
                 console.log('alert');
               });
             };                          

        }
    ]);

