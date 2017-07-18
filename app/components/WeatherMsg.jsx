var React = require('react');

var WeatherMsg = ({temp, location}) => {
		return (
			<p className="text-centered">{temp} degrees (F) in {location}</p>
		);
};

module.exports = WeatherMsg;