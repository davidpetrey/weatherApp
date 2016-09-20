angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService) {

            $scope.test = "Working";
            $scope.getWeather = function(city) {
                weatherService.getWeather(city).then(function(res) {
                    console.log(res);
                    $scope.weatherData = res.daily.data;
                    console.log("works", $scope.weatherData);
                })
            }

            $scope.convertWeatherTime = function(time) {
                return new Date(time * 1000);
            }
            $scope.roundTemp = function(temp) {
                return Math.round(temp);
            }
        });
