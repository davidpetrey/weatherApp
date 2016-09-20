angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService) {


            $scope.getWeather = function(city){
              console.log(city)
              weatherService.getWeather(city).then(function(response){
                $scope.cityWeather = response;
                $scope.weatherWeek = response.list;
                console.log($scope.weatherWeek);
              });
            }

            $scope.roundTemp = function(temp) {
                return Math.round(temp);
            }



//end ctrl
});
