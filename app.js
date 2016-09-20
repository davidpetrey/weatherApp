angular.module('weatherApp', ['ui.router', 'ngAnimate', 'ngResource', 'angular-loading-bar', 'angular-skycons']);

angular.module('weatherApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('forecast', {
      url: '/forecast',
      templateUrl: 'views/forecast.html',
      controller: 'weatherCtrl'
    })
    $urlRouterProvider.otherwise('/forecast');
});
