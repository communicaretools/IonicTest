angular.module('starter.controllers')
    .controller('LoginCtrl', [
        '$scope',
        '$log',
        '$state',
        '$ionicLoading', 
        '$localStorage',
        'loginManager', 
        'profileManager',
        'resources',
        function ($scope, $log, $state, $ionicLoading, $localStorage, loginManager, profileManager, resources) {
            var onError = function (e) {
                $log.error(e.msg);
            };

            var onLoginSuccess = function (result) {
                $ionicLoading.hide();
                profileManager.get(function (result) {
                    $localStorage.user = result.data;
                }, onError);
                $scope.$emit("logInChange", true);
                $state.go('home.forum');
            };

            var onLoginError = function (result) {
                $scope.informationText = null;
                $ionicLoading.hide();
                $log.error(result);
                $scope.$emit("logInChange", false);
                if (result.status === 403) {
                    $scope.informationText = resources.get('loginError');
                }
            }
            var onLogoutSuccess = function() {
                $scope.$emit("logInChange", false);
                loginManager.options(options);
                $localStorage.user = null;
            };
            var options = function(data) {
                $scope.$emit("logInChange", data.isLoggedIn);
                $scope.options = data;
            };
            loginManager.options(options);

            $scope.login = function(username, password) {
                $ionicLoading.show({ template: resources.get('loading') });
                loginManager.login(username, password, onLoginSuccess, onLoginError);
            };
            $scope.logout = function() {
                loginManager.logout(onLogoutSuccess);
            };
        }
    ]);
