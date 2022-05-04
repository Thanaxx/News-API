import { Link } from "react-router-dom";
import styled from "styled-components";

export const AllNewsWrap = styled.div`
    color: white;
`;

export const Title = styled.div`
    border-bottom: 3px solid #569814;
    margin: 0 20px;
    
    h3{
        font-size: 35px;
        font-weight: 400;
    }
`;

export const NewsNames = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
    padding: 20px;

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NewsBox = styled(Link)`
    text-decoration: none;
    color: white;

    a{
        text-decoration: none;
        color: white;
    }

    img{
        width: 100%;
        height: 360px;

        @media screen and (max-width: 400px){
            height: 310px;
        }
    }

    .author{
        color: #8C8C8C;
        font-style: italic;
        font-size: 12px;
    }

    p{
        font-size: 14px;
        padding: 5px 0;
        font-weight: 300;
    }

    h3{
        font-size: 20px;
        font-weight: 400;
    }
`;