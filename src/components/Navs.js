import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavLink = styled.h4`
font-family: Open Sans;
color: #FFEAFD ;
font-size: 1.3em;
padding: 8px 0;
text-decoration: none;
text-align: center;
&:hover {
color: tomato;
}
`

const NavHeader = styled.h2`
font-family: Impact;
text-decoration: none;
font-size: 2.2em;
color: #FFEAFD  ;
border-style: outset;
text-shadow:
-1px -1px 0 #000,  
1px -1px 0 #000,
-1px 1px 0 #000,
1px 1px 0 #000;
&:hover {
    color: tomato;
    }
`





export default function Navs() {
    return (
        <div>
            <Navbar style={{borderBottom: '1px solid #979797'}} >
                <Container>
                    <NavHeader className="nowrap" as={Link} to="/">&nbsp;🌸 WZGRL 🌸&nbsp;</NavHeader>
                    <Nav className="me-auto">
                        <NavLink as={Link} to="/pinned">📍Pinned Players</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
