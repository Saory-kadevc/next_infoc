import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../styles/Menu.module.css';

export default function Menu() {
  return (

    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className={`${styles.degradeMenu}`}>
      <Container>
        <Navbar.Brand href="/">Info5C</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/esportes">Esportes</Nav.Link>
             <NavDropdown title="ReactHook" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usestate">UseState</NavDropdown.Item>
              <NavDropdown.Item href="/useeffect">UseEffect</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           <NavDropdown title="Cadastros" id="cadastros">
              <NavDropdown.Item href="/cadastros/cadnoticias">Noticias</NavDropdown.Item>
            </NavDropdown>
             <NavDropdown title="FunçãoNext" id='funcaonext'>
              <NavDropdown.Item href="/funcaonext/gssp"> getServerSideProps </NavDropdown.Item>
            </NavDropdown> {/**/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
