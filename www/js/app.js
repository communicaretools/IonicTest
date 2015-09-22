// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'ngStorage', 'starter.controllers', 'starter.services', 'starter.infrastructure', 'starter.filters', 'starter.directives', 'starter.config'])
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
                        templateUrl: 'templates/registration/registration.html'
                    }
                }
            })

            //--------------------------------------
            .state('home.exercises', {
                cache: false,
                url: '/exercises',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/exercise/exercises.html'
                    }
                }
            })
            .state('home.exercises.list', {
                cache: false,
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/exercise/tab-exList.html',
                        controller: 'ExerciseListCtrl'
                    }
                }
            })
            .state('home.exercises.fvList', {
                cache: false,
                url: '/favourites',
                views: {
                    'tab-fvList': {
                        templateUrl: 'templates/exercise/tab-exFvList.html',
                        controller: 'ExerciseListCtrl'
                    }
                }
            })
            .state('home.exerciseView', {
                cache: false,
                url: '/exercises/:exerciseId/:exerciseName',   
                views: {
                    'menuContent': {
                        templateUrl: 'templates/exercise/exerciseView.html',
                        controller: 'ExerciseCtrl'
                    }
                }
            })
            //------------------------------------------           
            .state('home.exerciseView.sound', {
                cache: false,
                url: '/sound',
                views: {
                    'tab-exSound': {
                        templateUrl: 'templates/exercise/tab-exSound.html'
                       
                    }
                }
            })
            .state('home.exerciseView.text', {
                cache: false,
                url: '/text',
                views: {
                    'tab-exText': {
                        templateUrl: 'templates/exercise/tab-exText.html'

                    }
                }
            })
            .state('home.exerciseView.details', {
                cache: false,
                url: '/details',
                views: {
                    'tab-exDetails': {
                        templateUrl: 'templates/exercise/tab-exDetails.html'

                    }
                }
            }) 
             //------------------------------------------
            .state('home.feed', {
                cache: false,
                url: '/feed',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/feed/feed.html',
                        controller: 'FeedCtrl as vm'
                    }
                }
            })
            //------------------------------------------
            .state('home.forum', {
                cache: false,
                url: '/threads',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/forum/threads.html',
                        controller: 'ThreadsCtrl'
                    }
                }
            })
            .state('home.thread', {
                cache: false,
                url: '/thread/:threadId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/forum/thread.html'
                    }
                }
            })

            // Each tab has its own nav history stack:
            .state('home.thread.list', {
                cache: false,
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/forum/tab-entryList.html',
                        controller: 'ThreadCtrl'
                    }
                }
            })
            .state('home.thread.newEntry', {
                cache: false,
                url: '/newEntry',
                views: {
                    'tab-new': {
                        templateUrl: 'templates/forum/tab-entryNew.html',
                        controller: 'ForumEntryCtrl'
                    }
                }
            })
            .state('home.registrationView', {
                cache: false,
                url: '/registration/:type/:regId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/registration/regView.html',
                        controller: 'ViewRegCtrl'
                    }
                }
            })

            .state('home.registration.list', {
                cache: false,
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/registration/tab-regList.html',
                        controller: 'RegistrationCtrl'
                    }
                }
            })
            .state('home.registration.newDaily', {
                cache: false,
                url: '/newDaily',
                views: {
                    'tab-newDaily': {
                        templateUrl: 'templates/registration/tab-regNewDaily.html',
                        controller: 'NewRegCtrl'
                    }
                }
            })
            .state('home.registration.newSmiley', {
                cache: false,
                url: '/newSmiley',
                views: {
                    'tab-newSmiley': {
                        templateUrl: 'templates/registration/tab-regNewSmiley.html',
                        controller: 'NewRegCtrl'
                    }
                }
            })
            .state('home.account', {
                cache: false,
                url: '/account',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/account/account.html',
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
                        templateUrl: 'templates/camera/camera.html',
                        controller: 'CameraCtrl'
                    }
                }
            })
            .state('home.video', {
                url: '/video',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/video/video.html',
                        controller: 'VideoCtrl'
                    }
                }
            })
            .state('home.messages', {
                url: '/messages',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/message/messages.html',
                    }
                }
            })
            .state('home.messages.inbox', {
                url: '/inbox',
                cache: false,
                views: {
                    'tab-inbox': {
                        templateUrl: 'templates/message/tab-messageInbox.html',
                        controller: 'MessagesCtrl'
                    }
                }
            })
            .state('home.messages.outbox', {
                url: '/outbox',
                cache: false,
                views: {
                    'tab-outbox': {
                        templateUrl: 'templates/message/tab-messageOutbox.html',
                        controller: 'MessagesCtrl'
                    }
                }
            })
            .state('home.messages.drafts', {
                url: '/drafts',
                cache: false,
                views: {
                    'tab-drafts': {
                        templateUrl: 'templates/message/tab-messageDrafts.html',
                        controller: 'MessagesCtrl'
                    }
                }
            })
            .state('home.messages.compose', {
                url: '/compose/:messageId',
                cache: false,
                views: {
                    'tab-new': {
                        templateUrl: 'templates/message/tab-messageNew.html',
                        controller: 'MessageComposeCtrl'
                    }
                }
            })
            .state('home.messageView', {
                url: '/messages/:messageId',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/message/messageView.html',
                        controller: 'MessageCtrl'
                    }
                }
            })
            .state('home.calendar', {
                url: '/calendar',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/calendar/calendar.html',
                        controller: 'CalendarCtrl'
                    }
                }
            })
            .state('home.diary', {
                url: '/diary',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/diary/diary.html',
                       
                    }
                }
            })
            .state('home.diary.list', {
                url: '/list',
                cache: false,
                views: {
                    'tab-list': {
                        templateUrl: 'templates/diary/tab-list.html',
                        controller: 'DiaryCtrl as vm'
                    }
                }
            })
            .state('home.diary.newEntry', {
                url: '/newEntry',
                cache: false,
                views: {
                    'tab-newEntry': {
                        templateUrl: 'templates/diary/tab-newEntry.html',
                        controller: 'DiaryEntryCtrl as vm'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('home/login');
    });
