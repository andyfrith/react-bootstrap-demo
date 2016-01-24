var React = require("react");
var AltContainer = require('alt/AltContainer');
var ExperienceStore = require('../../stores/experience.store');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Image = require('react-bootstrap/lib/Image');
var NavItem = require('react-bootstrap/lib/NavItem');

var Services = React.createClass({

	render() {
		if (this.props.errorMessage) {
			return (
				<div>{this.props.errorMessage}</div>
			);
		}

		if (ExperienceStore.isLoading()) {
			return (
				<div>
					<img src="build/images/ajax-loader.gif"/>
				</div>
			)
		}

		return (
			<div className="services">
				{
					this.props.services.map((experience, i) => {
						return (
							<div className="service subsection" key={i}>
								<Grid>
									<Row>
										<Col md={5}>
											<Image src="build/images/apple-icon.png" className="side-tag" />
											<Image src={experience.image} responsive />
										</Col>
										<Col md={7}>
											<h3>{experience.header}</h3>
											<h4>{experience.subheader}</h4>
											<p>{experience.info}</p>
											<p><NavItem href={experience.hyperlink}>{experience.hyperlink}</NavItem></p>
										</Col>
									</Row>
								</Grid>
							</div>
						);
					})}
			</div>
		);
	}
});

var Experiences = React.createClass({
	componentDidMount() {
		ExperienceStore.fetchExperiences();
	},

	render() {
		return (
			<div id="experiences" className="experiences">
				<div className="section-header">
					<h4>We've got the experience and are committed to excellence.</h4>
					<h3>We develop RIA, games, social media features, and websites for the apparel, automotive, entertainment, health
						care, and transportation industries.</h3>
				</div>
				<AltContainer store={ExperienceStore}>
					<Services />
				</AltContainer>
			</div>
		);
	}
});

/*
 <p>We've got the experience and are committed to excellence.</p>
 <p>I develop RIA, games, social media features, and websites for the apparel, automotive, entertainment, health
 care, and transportation industries.</p>
 */

module.exports = Experiences;