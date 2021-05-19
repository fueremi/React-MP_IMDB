import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = ({ title }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {title}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
