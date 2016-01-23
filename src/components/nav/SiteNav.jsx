var Nav = require('react-bootstrap/lib/Nav'),
	Navbar = require('react-bootstrap/lib/Navbar'),
	NavItem = require('react-bootstrap/lib/NavItem'),
	React = require("react");

var SiteNav = React.createClass({
	render: function () {
		return (
			<Navbar className="site-nav">
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">Experiences</NavItem>
						<NavItem eventKey={2} href="#">See The Apples</NavItem>
						<NavItem eventKey={3} href="#">About Good Apple Media</NavItem>
						<NavItem eventKey={4} href="#">Contact</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
});

module.exports = SiteNav;