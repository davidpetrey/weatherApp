angular.module('weatherApp', ['ui.router', 'ngAnimate', 'angular-loading-bar']);

angular.module('weatherApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('forecast', {
      url: '/forecast',
      templateUrl: 'views/forecast.html',
      controller: 'weatherCtrl'
    })

    .state('log', {
      url: '/log',
      templateUrl: 'views/weatherLog.html',
      controller: 'weatherCtrl'
    })
    $urlRouterProvider.otherwise('/forecast');
});
