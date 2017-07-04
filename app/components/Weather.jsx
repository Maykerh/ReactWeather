var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeaterMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function() {
	
		return {
			isLoading: false
		}	
	},

	handleSearch: function(location) {
		var me = this;

		me.setState({
			isLoading: true
		});

		openWeaterMap.getTemp(location).then(function(temp){
			me.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			alert(errorMessage);

			me.setState({
				isLoading: false
			});
		});
	},

	render: function () {

		var {temp, location, isLoading} = this.state;

		function renderMessage () {

			if (isLoading) {

				return <h3>Loading weather</h3>;

			} else if (temp && location) {

				return (
					<WeatherMessage location={location}
									temp={temp}/>
				);
			}
		}

		return (
			<div>
				<h1>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
