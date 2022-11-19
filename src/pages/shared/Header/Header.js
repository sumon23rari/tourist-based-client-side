import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
const Header = () => {
 const [user]=useAuthState(auth);

const handlelogOut=async()=>{
await signOut(auth)
}
 
    return (

            <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
              <Container>
                <Navbar.Brand as={Link} to="/"className='color-white'>Tourism based service</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="home#domestics">Domestics</Nav.Link>
                    <Nav.Link href="home#internationals">Internationals</Nav.Link>
                    <Nav.Link href="home#services">services</Nav.Link>
                   
                  </Nav>
                  <Nav>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                {user &&  <>
                 <Nav.Link as={Link} to="/manageService">manageService</Nav.Link>
                 <Nav.Link as={Link} to="/addService">addService</Nav.Link>
                 <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                 
                 </>
                }
                    {
                      user?  <button className='btn btn-link text-white text-decoration-none' onClick={handlelogOut} 
                      >log out</button>:
                      <Nav.Link as={Link} to="/login">sign In</Nav.Link>
                    }
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default Header;