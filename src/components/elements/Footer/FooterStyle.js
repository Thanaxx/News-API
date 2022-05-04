import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrap = styled.footer`
    background-color: #2C2C2C;
    color: white;
    padding: 30px 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Logo = styled.div`
    img{
        width: 60px;
    }
`;

export const Links = styled.div`
    text-align: center;
    
    @media screen and (max-width: 1200px) {
        text-align: left;
        padding: 10px 0;
    }
`;

export const Linkname = styled(Link)`
    margin: 0 30px;
    text-decoration: none;
    color: white;
    font-weight: 300;
    font-size: 14px;
    
    @media screen and (max-width: 1200px) {
        margin: 0;
        padding-right: 30px;
    }
`;

export const Copy = styled.div`
    text-align: right;

    @media screen and (max-width: 1200px) {
        text-align: left;
        padding: 10px 0;
    }

    h3{
        font-weight: 300;
        font-size: 14px;
    }
`;
