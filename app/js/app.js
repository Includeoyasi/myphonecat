'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/auth', {
        templateUrl: 'app/partials/phone-auth.html',
        controller: 'PhoneAuthCtrl'
      }).
      otherwise({
        redirectTo: '/auth'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }]);
