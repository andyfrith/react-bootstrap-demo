var React = require("react"),
	Jumbotron = require('react-bootstrap/lib/Jumbotron');

var Header = React.createClass({
	render: function () {
		return (
			<Jumbotron>
				<h1>This is Good Apple Media.</h1>
				<h4>I lead customers in surpassing their interactive media goals as a premier source of creativity and
					technical expertise in the delivery of state of the art interactive, mobile, web development and design
					solutions.</h4>
			</Jumbotron>
		);
	}
});

module.exports = Header;