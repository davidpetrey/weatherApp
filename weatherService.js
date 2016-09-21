angular.module("weatherApp").service("weatherService", function($http, $q) {


    var openWeatherKey = "c7969564d2884537f64d9c5750d8b275";
    // var darkSkyKey = "ae09ed9744cc4113f2cb0f42d6f17fb8";

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
            deferred.resolve(cityWeather);
          });
        	return deferred.promise;
        };

        // this.getWeatherIcons = function(city){
        //     	var deferred = $q.defer();
        //     	var cityIcons;
        //     	var cityIconsFinished;
        //     	$http({
        //     		method: "GET",
        //     		url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherKey
        //     	}).then(function(result){
        //     		cityIcons = result.data;
        //     		$http({
        //     			method: "JSONP",
        //     			url: "https://api.forecast.io/forecast/" + darkSkyKey + "/" + cityIcons.coord.lat + "," + cityIcons.coord.lon + "?callback=JSON_CALLBACK"
        //     		}).then(function(results){
        //     			cityIconsFinished = results.data;
        //     			deferred.resolve(cityIconsFinished);
        //     		});
        //     	});
        //     	return deferred.promise;
        //     };
      });
// send back cityWeather results AND your forecast icon results
