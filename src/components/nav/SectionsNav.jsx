var Nav = require('react-bootstrap/lib/Nav'),
	Navbar = require('react-bootstrap/lib/Navbar'),
	NavItem = require('react-bootstrap/lib/NavItem'),
	React = require("react");

var SectionsNav = React.createClass({
	render: function () {
		return (
			<Navbar className="sections-nav">
				<Nav pullRight>
					<NavItem className="jump-to" eventKey={1}>Jump to:</NavItem>
					<NavItem eventKey={2} href="#experiences">Experiences</NavItem>
					<NavItem eventKey={3} href="#apples">See The Apples</NavItem>
					<NavItem eventKey={4} href="#about">About Good Apple Media</NavItem>
					<NavItem eventKey={5} href="#contact">Contact</NavItem>
				</Nav>
			</Navbar>
		);
	}
});

module.exports = SectionsNav;