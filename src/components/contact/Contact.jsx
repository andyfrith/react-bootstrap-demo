var React = require("react");

var Contact = React.createClass({
	render: function () {
		return (
			<div className="contact">
				<div className="section-header">
					<h1>Contact Us</h1>
				</div>
				<div className="subsection">
					<p>For all general inquiries about the company and my services, please feel free to give me a call or send me
						an email. I look forward to learning how I can help your project succeed. Contact me for a proper
						introduction; I'll be happy to provide any estimates.</p>
				</div>
			</div>
		);
	}
});

module.exports = Contact;