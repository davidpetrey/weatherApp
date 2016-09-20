angular.module("weatherApp").service("weatherService", function($http, $q) {


    var openWeatherKey = "c7969564d2884537f64d9c5750d8b275";

    this.getWeather = function(city){
        	var deferred = $q.defer();
        	var cityWeather;
        	$http({
        		method: "GET",
        		url: "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=c7969564d2884537f64d9c5750d8b275",
            params:{
              q:city,
              cnt:5,
              units:'imperial'
            }
        	}).then(function(result){
        		cityWeather = result.data;
            console.log(cityWeather);
            deferred.resolve(cityWeather);
          });
        	return deferred.promise;
        };
      });
// send back cityWeather results AND your forecast icon results
