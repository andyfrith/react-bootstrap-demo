var React = require("react");
var AltContainer = require('alt/AltContainer');
var ExperienceStore = require('../../stores/experience.store');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Image = require('react-bootstrap/lib/Image');

var AllApples = React.createClass({

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
			<div className="all-apples subsection">
				<Grid>
					<Row>
						<Col md={12}>
				{
					this.props.apples.map((experience, i) => {
						return (
							<div className="apple" key={i}>
								<h4>{experience.header}</h4>
								<Image src={experience.image} responsive />
							</div>
						);
					})}
							</Col>
						</Row>
					</Grid>
			</div>
		);
	}
});

var Apples = React.createClass({
	componentDidMount() {
		ExperienceStore.fetchExperiences();
	},

	render() {
		return (
			<div id="apples" className="experiences">
				<div className="section-header">
					<h2>The Apples</h2>
					<h4>I've been a part of many exciting and challenging projects for some very successful companies.</h4>
				</div>
				<AltContainer store={ExperienceStore}>
					<AllApples />
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

module.exports = Apples;