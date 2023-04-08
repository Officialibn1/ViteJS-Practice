
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import styled from 'styled-components';

import { Link } from "react-router-dom";
import { useState } from 'react';
import { SidebarData } from '../datas/SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons';

const Nav = styled.nav`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2em;
    font-size: 2em;
    color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${({ sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms ease;
    z-index: 3;
`

const SidebarWrapper = styled.div`
    width: 100%;
`

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={() => showSidebar()}/>
                    </NavIcon>
                </Nav>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrapper>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={() => showSidebar()}/>
                        </NavIcon>

                        {SidebarData.map((item, idx) => (
                            <SubMenu item={item} key={idx}/>
                            ))}
                    </SidebarWrapper>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;
