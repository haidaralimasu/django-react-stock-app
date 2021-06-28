import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >Bull Carter</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" >Home</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/blog"  >Blog</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/news" >News</NavLinks>
                        </NavItem>

                        

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">SignIn</NavBtnLink> 
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
