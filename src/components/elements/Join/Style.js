import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactInfo = styled.div`
    padding: 60px 30px;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin-bottom: 50px;

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 2fr);
    }
`;

export const Detail = styled.div`
    color: white;

    p{
        font-size: 20px;
        font-weight: 300;
        color: #D7D7D7;

        @media screen and (max-width: 800px){
            text-align: center;
        }

    }
`;

export const Buttons = styled.div`
    text-align: right;

    @media screen and (max-width: 800px){
        text-align: center;
        margin-top: 30px;
    }

    button{
        padding: 10px 30px;
        margin-left: 20px;
        border-radius: 3px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .leftB{
        background-color: #569814;
        color: white;
    }

    .rightB{
        color: #569814;
    }
`;


export const ButtonRight = styled(Link)`

`