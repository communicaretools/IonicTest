angular.module('starter.controllers')
    .controller('LoginCtrl', [
        '$scope',
        '$log',
        '$state',
        '$ionicLoading',
        'loginManager',
        'resources',
        function($scope, $log, $state, $ionicLoading, loginManager, resources) {
            var onLoginSuccess = function(result) {
                $ionicLoading.hide();
                $scope.$emit("logInChange", true);
                $state.go('home.forum');
            };

            var onLoginError = function(result) {
                $ionicLoading.hide();
                $log.error(result);
                if (result.status === 403) {
                    $scope.informationText = resources.get('loginError');
                }
            }
            var onLogoutSuccess = function() {
                $scope.$emit("logInChange", false);
                loginManager.options(options)
            };
            var options = function(data) {
                $scope.$emit("logInChange", data.isLoggedIn);
                $scope.options = data;
            };
            loginManager.options(options);

            $scope.login = function(username, password) {
                $ionicLoading.show({ template: 'Loading...' });
                loginManager.login(username, password, onLoginSuccess, onLoginError);
            };
            $scope.logout = function() {
                loginManager.logout(onLogoutSuccess);
            };
        }
    ]);
