import React from 'react';
import {NavLink} from 'react-router-dom';
import '../nav.css'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

function Navs() {

  return (
    <div>
      <Navbar color='dark' dark>
        <NavbarBrand >blogPost</NavbarBrand>
          <Nav className='gap-4'>
            <NavItem>
              <NavLink className='link' to="/">Posts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='link' to="/createpost">
                Create Post
              </NavLink>
            </NavItem>
          
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navs;