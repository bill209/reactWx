var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWxMap = require('openWxMap');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(loc){
		var that = this;
		this.setState({isLoading: true});

		openWxMap.getTemp(loc).then(function(temp){
			that.setState({
				location: loc,
				temp: temp,
				isLoading: false
			})
		}, function(err){
			that.setState({ isLoading: false});
			alert('error: ', err);
		})
	},
	render: function(){
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if(isLoading){
				return <p className="text-centered">fetching weather ...</p>
			} else if(temp && Location){
				return <WeatherMsg location={location} temp={temp}/>
			} else {

			}
		}

		return(
			<div>
				<h1 className="text-centered">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
			)
	}
});

module.exports = Weather;