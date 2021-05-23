import React from 'react'
import styled from 'styled-components'
import Header from "./Header"

const Nav = styled.div`
    width: 100%;
    height: 40px;
    background-color: white;
    border: 2px groovy black;
    z-index: 2;
`

const Navbar = () => {
    return (
        <Nav>
            <Header/>
        </Nav>
    )
}

export default Navbar
