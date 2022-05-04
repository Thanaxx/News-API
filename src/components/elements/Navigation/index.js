import React, {useState} from 'react';
import {NavBar, Logo, Menu, Linkname, MenuBar} from './Stylenav';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {

    const [menu, setMenu] = useState(false)

    const menuOpen = () => {
        setMenu(!menu)
    }

    const closeMenu = () => {
        setMenu(false)
    }

  return (
      <>
        <NavBar>
            <Logo>
                <img src="/images/logo.png" alt="News Logo" />
            </Logo>
    
            <Menu>
                <li className={menu ? 'activeMenu' : 'closeMenu'}>
                    <Linkname to="/" onClick={closeMenu}>
                        Home
                    </Linkname>

                    <Linkname to="/about" onClick={closeMenu}>
                        About us
                    </Linkname>

                    <Linkname to="/services" onClick={closeMenu}>
                        Services
                    </Linkname>

                    <Linkname to="/talk" onClick={closeMenu}>
                        Let's Talk
                    </Linkname>
                </li>
            </Menu>

            <MenuBar onClick={menuOpen}>
                {menu ? <FaTimes/> : <FaBars/>}
            </MenuBar>
        </NavBar>
      </>
  )
}

export default Navigation;
