var React = require('react');

var WeatherMessage = (props) => {
	var {temp, location} = props;

	return (
		<div>
			<h3 classNamw="text-center">{"A temperatura em " + location + " é de " + temp}</h3>
		</div>
	);
};

module.exports = WeatherMessage;