import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const router = useRouter(); // Get the current route

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">Z&Z Interior</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" active={router.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" active={router.pathname === "/about"}>
              About
            </Nav.Link>
            <Nav.Link href="/pricing" active={router.pathname === "/pricing"}>
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
