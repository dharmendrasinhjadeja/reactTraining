import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import { logout } from '../auth/authSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('userToken'))
  const dispatch = useDispatch()

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: 'center', marginLeft: '200px', color: 'white' }}
          >
            Assignment 3
          </h1>
          <h4
            style={{ textAlign: 'right', marginLeft: '400px', color: 'white' }}
          >
            {userInfo?.name ? `${userInfo?.name}` : ''}
          </h4>
          <br />
          <h4
            style={{ textAlign: 'right', marginLeft: '50px', color: 'white' }}
          >
            {userInfo ? `${userInfo?.email}` : ''}
          </h4>
          {userInfo ? (
            <NavLink
              style={{ textAlign: 'right', marginLeft: '20px', color: 'white' }}
              onClick={() => dispatch(logout()).then(() => navigate('login'))}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              style={{ textAlign: 'right', marginLeft: '50px', color: 'green' }}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
