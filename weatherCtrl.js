angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService) {


            $scope.getWeather = function(city){
              console.log(city)
              weatherService.getWeather(city).then(function(response){
                console.log(response);
                $scope.cityWeather = response;
                $scope.weatherWeek = response.list;
              });
              weatherService.getWeatherIcons(city).then(function(response){
                $scope.weatherIcons = response.daily.data;
                  console.log("Icons", $scope.weatherIcons);
              })
            }

            $scope.roundTemp = function(temp) {
                return Math.round(temp);
            }



//end ctrl
});
