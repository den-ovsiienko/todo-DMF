import React from 'react'
import { Container, Row, Col, Button, Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

const TodoNavbar = ({toggleMenu, menuOpen}) => {
  return (
    <Navbar
        color='light'
        fixed='top'
        sticky='true'
        light
      >
        <NavbarBrand>
          <i className="bi bi-check2-square me-2"></i>
          Your TODO's
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Button 
              color='none' 
              className='d-none d-xl-block' 
              onClick={toggleMenu}>
                <i className={`bi bi-arrow-${menuOpen ? 'right' : 'left'}`}></i>
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
  )
}

export default TodoNavbar
