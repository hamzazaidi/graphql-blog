
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Navbar() {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <LinkContainer to="/">
                <BootstrapNavbar.Brand>Ninja Blog</BootstrapNavbar.Brand>
            </LinkContainer>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/blogs">
                        <Nav.Link>Blogs</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/bloggers">
                        <Nav.Link>Bloggers</Nav.Link>
                    </LinkContainer>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
}

export default Navbar;
