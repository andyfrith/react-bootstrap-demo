var React = require("react");
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var NavItem = require('react-bootstrap/lib/NavItem');

var Contact = React.createClass({
	render: function () {
		return (
			<div id="contact" className="contact">
				<div className="section-header">
					<h1>Contact Us</h1>
					<p>For all general inquiries about the company and my services, please feel free to give me a call or send me
						an email. I look forward to learning how I can help your project succeed. Contact me for a proper
						introduction; I'll be happy to provide any estimates.</p>
				</div>
				<div className="subsection">
					<Grid>
						<Row>
							<Col xs={4}>
								<h2>Email</h2>
								<NavItem href="mailto:info@goodapplemedia.com">info@goodapplemedia.com</NavItem>
							</Col>
							<Col xs={4}>
								<h2>Address</h2>
								<p>Good Apple Media<br />18560 W. 84th Pl<br />Arvada, CO 80007</p>
							</Col>
							<Col xs={4}>
								<h2>Telephone</h2>
								<p>303.420.5190</p>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
});

module.exports = Contact;