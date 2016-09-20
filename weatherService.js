angular.module("weatherApp").service("weatherService", function($http, $q) {


    var openWeatherKey = "c7969564d2884537f64d9c5750d8b275";
    var darkSkyKey = "543402dc770abb8af76b78c4987d6e20";


    this.getWeather = function(city){
    	var deferred = $q.defer();
    	var cityWeather;
    	var cityWeatherFinished;
    	$http({
    		method: "GET",
    		url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherKey
    	}).then(function(result){
    		cityWeather = result.data;
    		$http({
    			method: "JSONP",
    			url: "https://api.forecast.io/forecast/" + darkSkyKey + "/" + cityWeather.coord.lat + "," + cityWeather.coord.lon + "?callback=JSON_CALLBACK"
    		}).then(function(results){
    			cityWeatherFinished = results.data;
    			deferred.resolve(cityWeatherFinished);
    		});
    	});
    	return deferred.promise;
    };
})
