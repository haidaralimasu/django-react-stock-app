import styled from 'styled-components'
import { NavLink as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: #212121;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
    transition: 0.8s all ease;    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        text-decoration:none;
        color: #fff;
    }
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
          display: block;
          position: absolute;
          top: 1rem;
          right: 1rem;
          transform: translate(-100, 60);
          font-size: 1.8rem;
          cursor: pointer;
          color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    // margin-right: -22px;
    // top: 12rem;
    margin-bottom: 10px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    // top: 1rem;
    color: #fff;
    // height: 80px;
`
export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin-top: 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;
    &.active {
        color: #15cdfc
    }
    &:hover {
        text-decoration: none;
        color: #15cdfc
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #15cdfc;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
    }
`
