import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/professionals' onClick={toggle}>
            Professionals
          </SidebarLink>
          <SidebarLink to='/shops' onClick={toggle}>
            Shops
          </SidebarLink>
          <SidebarLink to='/services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='/favorites' onClick={toggle}>
            Favourites
          </SidebarLink>
          <SidebarLink to='/blogs' onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to='/contactus' onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to='/addbusiness'>Team up with a buddy</SidebarRoute>
        </SideBtnWrap>

        <SideBtnWrap>
          <SidebarRoute to='/signin'>Book a surgery</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
