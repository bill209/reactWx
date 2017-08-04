var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWxMap = require('openWxMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false,
			wxError: false
		}
	},
	handleSearch: function(loc){
		var that = this;
		this.setState({
			isLoading: true,
			wxError: false,
			errorMsg: undefined,
			location: undefined,
			temp: undefined
		});

		openWxMap.getTemp(loc).then(function(temp){
			that.setState({
				location: loc,
				temp: temp,
				isLoading: false
			})
		}, function(e){
			that.setState({
				isLoading: false,
				wxError: true,
				errorMsg: e.message
			});
		})
	},
	componentDidMount: function(){
		var loc = this.props.location.query.location;
		if(loc && loc.length > 0){
			this.handleSearch(loc);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps){
		var loc = newProps.location.query.location;

		if(loc && loc.length > 0){
			this.handleSearch(loc);
			window.location.hash = '#/';
		}
	},
	render: function(){
		var {isLoading, temp, location, wxError, errorMsg} = this.state;

		function renderMessage(){
			if(isLoading){
				return <p className="text-center">fetching weather ...</p>
			} else if(temp && Location){
				return <WeatherMsg location={location} temp={temp}/>
			}
		}

		function renderError(){
			if(wxError){
				return(
					<ErrorModal msg={errorMsg} title="crazy!"/>
				)
			}
		}

		return(
			<div>
				<h1 className="page-title text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch} searchLoc={location}/>
				{renderMessage()}
				{renderError()}
			</div>
			)
	}
});

module.exports = Weather;