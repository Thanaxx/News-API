import { Link } from "react-router-dom";
import styled from "styled-components";

export const MoreContainer = styled.div`
    padding-bottom: 30px;
    text-align: center;
`;

export const BtnSeeMore = styled(Link)`
    .button{
        display: inline-block;
        border-radius: 50px;
        background-color: #2E2E2E;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 18px;
        padding: 10px;
        width: 160px;
        transition: all 0.5s;
        cursor: pointer;
    }


    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
        font-weight: 300;
    }

    .button span:after {
        content: '>';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
        color: #569814;
    }

    .button:hover span {
        padding-right: 25px;
    }

    .button:hover span:after {
        opacity: 1;
        right: 0;
    }
`;