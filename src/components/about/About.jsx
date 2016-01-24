var React = require("react");
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Image = require('react-bootstrap/lib/Image');
var NavItem = require('react-bootstrap/lib/NavItem');

var About = React.createClass({
	render: function () {
		return (
			<div id="about" className="about">
				<div className="section-header">
					<h1>About Good Apple Media</h1>
					<p>We're located in the beautiful and exciting city of Denver, Colorado. Our office is only minutes away from
						downtown Denver, Boulder, and also some of the best outdoor activities in the world. We work hard, but like
						everyone else in this part of the world, we play hard too. I'm committed to excellence in many ways!</p>
				</div>
				<div className="subsection">
					<Grid>
						<Row>
							<Col xs={6}>
								<h2>Andy Frith</h2>
								<p>As the Czar of Interactive, I am ultimately responsible for the creation of all things interactive. I enjoy collaborating with fellow artists and developers. I love the creativity in my work and making customers smile.</p>
							</Col>
							<Col xs={6}>
								<h2>Links and Contributions</h2>
								<NavItem className="contribution" href="http://www.linkedin.com/in/goodapplemedia">
									<Image src="build/images/linkedIn.png"/>
								</NavItem>
								<NavItem className="contribution github" href="http://github.com/andyfrith">
									<Image src="build/images/github_small.png"/>
								</NavItem>
								<br/><br/>
								<NavItem className="contribution" href="http://goodapplemedia.com/AndyFrithResume.pdf">Download my résumé</NavItem>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
});

module.exports = About;