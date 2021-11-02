import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <img
                    src="./logo.png"
                    width="35"
                    height="35"
                    className="align-top"
                    alt="React Bootstrap logo"
                />
                <Link to="/" className='navbar-brand p-2'><h2>Movies App</h2></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link"><h4>Home</h4></Link>
                        <Link to="/add-movie" className="nav-link"><h4>Add Movie</h4></Link>
                        <Link to="/highrated-movies" className="nav-link"><h4>Highly-Rated-Movies</h4></Link>
                        <Link to="/recent-movies" className="nav-link"><h4>Recent-Movies</h4></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;