'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

(function () {


  angular
    .module('app', [
      'ngMaterial',
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      "ui.router",
      'ngSanitize',
      'ngTouch',
      'ngMdIcons'
    ])
    .config(function ($urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');

    });
})();
