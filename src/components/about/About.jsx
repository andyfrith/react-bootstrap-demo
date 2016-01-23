var React = require("react");
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');

var About = React.createClass({
	render: function () {
		return (
			<div className="about">
				<div className="section-header">
					<h1>About Good Apple Media</h1>
					<p>I'm located in the beautiful and exciting city of Denver, Colorado. My office is only minutes away from
						downtown Denver, Boulder, and also some of the best outdoor activities in the world. I work hard, but like
						everyone else in this part of the world, I play hard too. I'm committed to excellence in many ways!</p>
				</div>
				<div className="subsection">
								<h2>Andy Frith</h2>
								<p>As the Czar of Interactive, I am ultimately responsible for the creation of all things interactive.  I enjoy collaborating with fellow artists and developers.  I love the creativity in my work and making customers smile.</p>
								<h2>Links and Contributions</h2>
				</div>
			</div>
		);
	}
});

module.exports = About;


/*
<div className="subsection">
 <Grid>
 <Row>
 <Col xs={6}>
 <h2>Andy Frith</h2>
 <p>As the Czar of Interactive, I am ultimately responsible for the creation of all things interactive.  I enjoy collaborating with fellow artists and developers.  I love the creativity in my work and making customers smile.</p>
 </Col>
 <Col xs={6}>
 <h2>Links and Contributions</h2>
 </Col>
 </Row>
 </Grid>
 </div>
	*/