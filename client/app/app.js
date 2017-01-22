'use strict';

/**
 * @ngdoc overview
 * @name kazooApp
 * @description
 * # kazooApp
 *
 * Main module of the application.
 */
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
  .config(function ( $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

  });
