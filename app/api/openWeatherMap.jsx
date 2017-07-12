var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=0a814a1d31c3416459f2fe2b41df2177";

module.exports = {

	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function (res) {

			if( res.data.cod && res.data.message ){
				throw new Error(res.data.message);
			}else {
				return res.data.main.temp;
			}
		}, function (err) {

			throw new Error(err.response.data.message);
		});
	}
}