import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/*import Logo from "../Images/logo.png";*/
import Logo from "../Images/logo4.png";

export const NavigationBar = () => {
  return (
    <Navbar className="Navbar">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="company logo" className="brand_img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link" active>
              Watchlist
            </Link>
            <Link to="/price-points" className="nav-link">
              Price Points
            </Link>
            <Link to="/market-news" className="nav-link">
              Market News
            </Link>
            <Link to="/sentiment-analysis" className="nav-link">
              Sentiment Analysis
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
