import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar expand="lg" className="py-3 sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Assistante maternelle
          </Navbar.Brand>

          <Button
            onClick={() => setShowSidebar(true)}
            aria-label="Afficher le menu de navigation pour mobile"
            className="d-lg-none ms-auto burger-btn"
          >
            <FaBars />
          </Button>

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto align-items-lg-center gap-2">
              <Nav.Link as={Link} to="/" className="px-3 fw-bold">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3 fw-bold">
                A propos
              </Nav.Link>
              {!isLoggedIn ? (
                <Nav.Link
                  onClick={handleContactScroll}
                  className="px-3 fw-bold"
                >
                  Contact
                </Nav.Link>
              ) : (
                <div className="d-flex gap-2 flex-column flex-lg-row align-items-stretch align-items-lg-center mt-lg-0">
                  <Nav.Link as={Link} to="/dashboard" className="px-3 fw-bold">
                    Administration
                  </Nav.Link>
                  <Button
                    aria-label="Bouton de déconnexion"
                    className="border-black"
                    variant="outline-black"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="end"
        className="bg-dark text-white"
        style={{ maxWidth: "75vw" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/"
              className="text-black fw-bold text-end mb-3"
              onClick={() => setShowSidebar(false)}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-black fw-bold text-end mb-3"
              onClick={() => setShowSidebar(false)}
            >
              A propos
            </Nav.Link>
            {!isLoggedIn ? (
              <Nav.Link
                className="text-black fw-bold text-end mb-3"
                onClick={() => {
                  handleContactScroll();
                  setShowSidebar(false);
                }}
              >
                Contact
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/dashboard"
                  className="text-black fw-bold text-end"
                  onClick={() => setShowSidebar(false)}
                >
                  Administration
                </Nav.Link>
                <Button
                  aria-label="Bouton de déconnexion"
                  variant="outline-black"
                  size="sm"
                  onClick={handleLogout}
                  className="mt-3"
                >
                  Déconnexion
                </Button>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
