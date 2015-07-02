// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.infrastructure'])
    .constant("ApiEndpoint", {
        url: "http://localhost:8100/api"
    //url: "http://sps.rr-research.no/demo/connectwcp/webchoice/api"
    })
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
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
    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('forum', {
                url: '/forum',
                cache: false,
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'MenuCtrl'
            })
            .state('forum.threads', {
                url: '/threads',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/threads.html',
                        controller: 'ThreadsCtrl'
                    }
                }
            })
            .state('forum.thread', {
                url: '/thread/:threadId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/test.html',
                        controller: 'ThreadCtrl'
                    }
                }
            })

            // Each tab has its own nav history stack:
            .state('forum.thread.dash', {
                cache: false,
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('forum.thread.newEntry', {
                cache: false,
                url: '/newEntry',
                views: {
                    'tab-newEntry': {
                        templateUrl: 'templates/newEntry.html',
                        controller: 'EntryCtrl'
                    }
                }
            })
            .state('forum.account', {
                url: '/account',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('forum.login', {
                url: '/login',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('forum.login.tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('forum/login');
    });
