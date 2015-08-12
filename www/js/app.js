// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.infrastructure', 'starter.filters', 'starter.directives', 'starter.config'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('home', {
                url: '/home',
                cache: false,
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'MenuCtrl'
            })
            .state('home.registration', {
                cache: false,
                url: '/registration',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/registration.html'
                    }
                }
            })

            //--------------------------------------
            .state('home.exercises', {
                cache: false,
                url: '/exercises',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/exercises.html'
                    }
                }
            }) 
            .state('home.exercises.list', {
                cache: false,
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/tab-exercisesList.html',
                        controller: 'ExercisesCtrl'
                    }
                }
            }) 
            .state('home.exercises.mine', {
                cache: false,
                url: '/mine',
                views: {
                    'tab-mine': {
                        templateUrl: 'templates/tab-exercisesList.html',
                        controller: 'ExercisesCtrl'
                    }
                }
            })  
            .state('home.exerciseModal', {
                cache: false,
                url: '/exercises/:exerciseId',
                templateUrl: 'templates/modal-exerciseView.html'
            })

            //------------------------------------------                                 
            .state('home.forum', {
                cache: false,
                url: '/threads',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/threads.html',
                        controller: 'ThreadsCtrl'
                    }
                }
            })
            .state('home.thread', {
                cache: false,
                url: '/thread/:threadId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/thread.html'
                    }
                }
            })

            // Each tab has its own nav history stack:
            .state('home.thread.list', {
                cache: false,
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/tab-entryList.html',
                        controller: 'ThreadCtrl'
                    }
                }
            })
            .state('home.thread.newEntry', {
                cache: false,
                url: '/newEntry',
                views: {
                    'tab-new': {
                        templateUrl: 'templates/tab-entryNew.html',
                        controller: 'EntryCtrl'
                    }
                }
            })

            .state('home.registrationView', {
                cache: false,
                url: '/registration/:type/:regId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/regView.html',
                        controller: 'ViewRegCtrl'
                    }
                }
            })

            .state('home.registration.list', {
                cache: false,
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/tab-regList.html',
                        controller: 'RegistrationCtrl'
                    }
                }
            })
            .state('home.registration.newDaily', {
                cache: false,
                url: '/newDaily',
                views: {
                    'tab-newDaily': {
                        templateUrl: 'templates/tab-regNewDaily.html',
                        controller: 'NewRegCtrl'
                    }
                }
            })
            .state('home.registration.newSmiley', {
                cache: false,
                url: '/newSmiley',
                views: {
                    'tab-newSmiley': {
                        templateUrl: 'templates/tab-regNewSmiley.html',
                        controller: 'NewRegCtrl'
                    }
                }
            })
            .state('home.account', {
                cache: false,
                url: '/account',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('home.login', {
                url: '/login',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('home.camera', {
                url: '/camera',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/camera.html',
                        controller: 'CameraCtrl'
                    }
                }
            })
            .state('home.video', {
                url: '/video',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/video.html',
                        controller: 'VideoCtrl'
                    }
                }
            })
            .state('home.messages', {
                url: '/messages',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/messages.html',
                        controller: 'MessagesCtrl'
                    }
                }
            })
            .state('home.messageView', {
                url: '/messages/:messageId',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/messageView.html',
                        controller: 'MessageCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('home/login');
    });
