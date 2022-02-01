import React, { useState, useEffect,useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { loginStat } from '../Redux/actions/loginActions'
import { getActiveUser } from '../Redux/actions/userActions'
import { getActiveRole } from '../Redux/actions/roleActions'
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

function Navi({ loginStat, loginstat, getActiveRole, activeuser, getActiveUser, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const mounted = useRef();
  let history = useHistory();
  /* eslint eqeqeq: 0 */

  useEffect(() => {
    if (!mounted.current) {
  
           mounted.current = true;
           loginstatus();

    } else {
    

    }

  })


  const loginstatus = () => {
      if (loginstat !== localStorage.getItem("loginstat")) { loginStat(localStorage.getItem("loginstat")) }
      
      if (activeuser !== JSON.parse(localStorage.getItem("activeuser"))) { getActiveUser(JSON.parse(localStorage.getItem("activeuser"))) }
   
  }
  const loginclick = () => {
    if (loginstat == false||loginstat ==null) {
      history.push("/Login")
    }

  }
  const dropdownclick = () => {
    if (loginstat == false||loginstat ==null) {
      history.push("/Login")
    } else {
      history.push("/Profile")

    }

  }

  const singout = () => {
    getActiveRole(null);
    getActiveUser(null);
    localStorage.removeItem("activeuser")
    localStorage.removeItem("loginstat")

    loginStat("false");
    loginstatus();
    history.push("/")

  }
  const navlogin = () => {
    if (loginstat == false||loginstat ==null) {
      return (<NavItem>
        <NavLink onClick={loginclick}>Login</NavLink>
      </NavItem>)
    } else {
      return (<UncontrolledDropdown nav inNavbar>
        <DropdownMenu end>
     
        </DropdownMenu>
        <DropdownToggle id="navlogin" nav caret>
          {activeuser.Name}
        </DropdownToggle>
      </UncontrolledDropdown>
      )
    }

  }

  const dropdownmenu = () => {
    if (loginstat == false||loginstat ==null) {
    } else {
      return (<div>
           <DropdownItem onClick={dropdownclick}>
          Profil
        </DropdownItem>
        <DropdownItem>
          Option 2
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={singout}>
          Sign out
        </DropdownItem>

      </div>
      )
    }

  }


  return (
    <div>
      <Container>

        <Row>
          <Navbar color="dark" dark expand="sm p-2">
            <NavbarBrand onClick={() => history.push("/")}>Projects Portal</NavbarBrand>
            <Col>


              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink onClick={() => history.push("/")}>Projects</NavLink>
                  </NavItem>


                </Nav>
              </Collapse>

            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>

              <Nav className="mr-auto" navbar>
                {navlogin()}






              </Nav>
            </Col>
          </Navbar>
        </Row>


      </Container>

    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    activeuser: state.activeUserReducers,
    loginstat: state.loginReducers
  }
}
const mapDispatchToProps = {
  getActiveUser, loginStat, getActiveRole
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi)
