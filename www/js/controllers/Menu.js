angular.module('starter.controllers')
    .controller('MenuCtrl', [
        '$scope',
        '$state',
        '$localStorage',
        'loginManager',
        'resources',
        function ($scope, $state, $localStorage, loginManager, resources) {
            resources.load().then(function () {
                if (!$scope.user) {
                    $scope.user = $localStorage.user;
                }
                $scope.menuItems = [
                    {
                        state: "feed",
                        name: resources.get("menuFeed")
                    },
                    {
                        state: "forum",
                        name: resources.get("menuForum")
                    },
                    {
                        state: "diary.list",
                        name: resources.get("diary")
                    },
                    {
                        state: "exercises",
                        name: resources.get("menuExercises")
                    },
                    {
                        state: "registration",
                        name: resources.get("menuRegistrations")
                    },
                    {
                        state: "messages",
                        name: resources.get("menuMessages")
                    },
                    {
                        state: "camera",
                        name: resources.get("menuCamera")
                    },
                    {
                        state: "video",
                        name: resources.get("menuVideo")
                    },
                    {
                        state: "calendar",
                        name: resources.get("calendar")
                    },
                    {
                        state: "account",
                        name: resources.get("menuSettings")
                    },
                    {
                        state: "login",
                        name: resources.get("logOut")
                    }
                ];
            });
            

            if (typeof $scope.isLoggedIn === "undefined") {
                loginManager.options(function (data) {
                    $scope.isLoggedIn = data.isLoggedIn;
                });
            }
            $scope.$on("logInChange", function(e, status) {
                $scope.isLoggedIn = status;
                $scope.user = $localStorage.user;
                if ($scope.isLoggedIn) {
                    $state.go('home.login');
                }
            });
        }
    ]);