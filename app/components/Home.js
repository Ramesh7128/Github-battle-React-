var React = require('react');
var transparentBg = require('../styles/index').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Main =  require('./Main');

var Home = React.createClass({

	render: function() {

		return (

			<div style={transparentBg}>
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>

				<h1> Github Battle </h1>
				<p className="lead"> some fancy motto </p>
				<Link to="/playerOne">
					<button type="button" className='btn btn-lg btn-success'>Get started </button>
				</Link>

			</div>
			</div>
			)

	}

});


module.exports = Home;