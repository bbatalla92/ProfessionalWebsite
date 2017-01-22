'use strict';

angular.module('app')
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  }])
  .component("main",{
    templateUrl: 'app/main/main.html',
    controller: mainCtrl
  });


  function mainCtrl(){
    var ctrl = this;

    ctrl.person = {
      age: ''
    };

    getAge();

    function getAge(){
      var ageDifMs = Date.now() - 720583200000;
      ctrl.person.age = Math.floor(ageDifMs / (60*60*24*365*1000));
      console.log('years', ctrl.person.age);
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

  }
