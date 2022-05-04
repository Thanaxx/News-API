import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const NavBar = styled.nav`
    background-color: #212121;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const Logo = styled.div`
    flex: 1;
    padding-left: 20px;
    cursor: pointer;

    img{
        width: 70px;
    }
`;

export const Menu = styled.div`
    flex: 1;
    padding-right: 20px;
    
    @media screen and (max-width: 600px){
        .activeMenu{
            background-color: #212121;
            position: fixed;
            z-index: 1;
            top: 75px;
            left: 0;
            width: 100%;
            height: 90vh;
            transition: all 0.4s ease;
        }

        .closeMenu{
            opacity: 0;
            position: fixed;
        }
    }
    
    li{
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width: 600px){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Linkname = styled(Link)`
    text-decoration: none;
    color: white;

    @media screen and (min-width: 600px){
        :hover{
            color: #569814;
            transition: all 0.4s ease;
        }
    }

    @media screen and (max-width: 600px){
        margin: 40px 0;
    }
`

export const MenuBar= styled.div`
    color: white;
    font-size: 30px;
    display: none;
    cursor: pointer;
    margin-right: 20px;

    @media screen and (max-width: 600px){
        display: block;
    }
`

