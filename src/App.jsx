var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/header/Header.jsx');
var SiteNav = require('./components/nav/SiteNav.jsx');
var SectionsNav = require('./components/nav/SectionsNav.jsx');
var Experiences = require('./components/experiences/Experiences.jsx');
var Apples = require('./components/apples/Apples.jsx');
var About = require('./components/about/About.jsx');
var Contact = require('./components/contact/Contact.jsx');
var Footer = require('./components/footer/Footer.jsx');
var DemoInfoModal = require('./components/DemoInfoModal.jsx');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');

var mountNode = document.getElementById('app');

var App = React.createClass({
	render: function () {
		return (
			<div>
				<DemoInfoModal />
				</div>
		);

		//return (
		//	<Grid>
		//		<Row>
		//			<Col xs={12}>
		//				<SiteNav />
		//				<Header />
		//				<SectionsNav />
		//				<Experiences />
		//				<SectionsNav />
		//				<Apples />
		//				<SectionsNav />
		//				<About />
		//				<SectionsNav />
		//				<Contact />
		//			</Col>
		//		</Row>
		//	</Grid>
		//);
	}
});

ReactDOM.render(<App />, mountNode);