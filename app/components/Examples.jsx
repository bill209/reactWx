var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are few examples to try out:</p>
			<ol>
				<li>
					<Link to="/?location=apex">Apex, NC</Link>
				</li>
				<li>
					<Link to="/?location=gulf%20shores">Gulf Shores, AL</Link>
				</li>
				<li>
					<Link to="/?location=tokyo">Tokyo, Japan</Link>
				</li>
				<li>
					<Link to="/?location=hamilton,%20bermuda">Hamilton, Bermuda</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;