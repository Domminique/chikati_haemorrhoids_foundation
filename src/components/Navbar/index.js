import React, { useEffect, useState } from 'react'
import { FaBars, FaPlus } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from 'react-router-dom'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, SetScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true)
    } else {
      SetScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Chikati Haemorrhoids Foundation
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='/shops'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Community
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to='/contactus'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  {' '}
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/addbusiness'> Team up with a buddy</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/shops'>Book a surgery</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  )
}

export default Navbar
