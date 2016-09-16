angular.module("weatherApp").service("weatherService", function($http, $q){


	var openKey= "c7969564d2884537f64d9c5750d8b275";
	var forecastIOKey = "543402dc770abb8af76b78c4987d6e20";


	this.getWeather = function(city){
		var deferred = $q.defer();
		var cityComplete;
		var cityCompleted;
		$http({
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openKey
		}).then(function(result){
			cityComplete = result.data;
			console.log(cityComplete);
			$http({
				method: "JSONP",
				url: "https://api.forecast.io/forecast/" + forecastIOKey + "/" + cityComplete.coord.lat + "," + cityComplete.coord.lon + "?callback=JSON_CALLBACK"
			}).then(function(results){
				cityCompleted = results.data;
				console.log(cityCompleted);
				deferred.resolve(cityCompleted);
			});
		});
		return deferred.promise;
	};


});
