'use strict';

angular.module('starter.filters')
 .filter('unsafe', ['$sce', function ($sce) {
     return function (text) {
         return $sce.trustAsHtml(text);
     };
 }]);
