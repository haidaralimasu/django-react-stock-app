import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {




    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}  >
                        Home
                    </SidebarLink>


                    <SidebarLink to="/blog" onClick={toggle}  >
                        Blog
                    </SidebarLink>

                    <SidebarLink to="/news" onClick={toggle}  >
                        News
                    </SidebarLink>

                    <SidebarLink to="/stocks" onClick={toggle}  >
                        Stocks
                    </SidebarLink>

                  
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" >SignIn</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
