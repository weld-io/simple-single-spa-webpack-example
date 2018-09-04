import angular from 'angular';
import 'angular-ui-router';

angular.module('angularJsModule', ['ui.router']);

angular
.module('angularJsModule')
.config(($stateProvider, $locationProvider) => {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $stateProvider
  .state('root', {
    url: '/app3',
    template: '<p style="margin-top: 100px;">Hello AngularJS</p>',
  })

});