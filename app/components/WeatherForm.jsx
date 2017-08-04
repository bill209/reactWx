var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var location = this.refs.location.value;
		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	componentWillReceiveProps: function(newProps){
		var loc = newProps.searchLoc;
		console.log("loc",loc);
		console.log("newProps",newProps);
		
		

		if(loc && loc.length > 0){
			this.refs.location.value = loc;
		}
	},
	render: function(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="search" placeholder="Search weather by city" ref="location"/>
					<button className="button hollow expanded">Get Weather</button>
				</form>
			</div>
		)
	}
});

module.exports = WeatherForm;