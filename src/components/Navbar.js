import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export const NavigationBar = () => {
    return (
        <Navbar className="Navbar">
        <Container>
          <Navbar.Brand>Trading News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link" active>Watchlist</Link>
              <Link to="/price-points" className="nav-link">Price Points</Link>
              <Link to="/market-news" className="nav-link">Market News</Link>
              <Link to="/sentiment-analysis" className="nav-link">Sentiment Analysis</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}
