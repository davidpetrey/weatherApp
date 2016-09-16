angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService){

  $scope.test = "Working";
  $scope.weatherData;
  $scope.getWeather = function(city){
    weatherService.getWeather(city);
    }

  $scope.convertWeatherTime = function(time){
  return new Date(time * 1000);
}
$scope.roundTemp = function(temp){
  return Math.round(temp);
}
})
