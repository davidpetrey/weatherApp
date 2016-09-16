angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService){

  $scope.test = "Working";
  $scope.getWeather = function(city){
    console.log(city);
    weatherService.getWeather(city).then(function(data){
      $scope.weatherData = data.daily.data;
    })
  }
  $scope.convertWeatherTime = function(time){
  return new Date(time * 1000);
}
$scope.roundTemp = function(temp){
  return Math.round(temp);
}
})
