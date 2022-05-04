import styled from "styled-components";

export const AboutWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    color: white;
    padding: 30px 0;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }

    @media screen and (max-width: 400px){
        flex-direction: column;
    }
`;

export const AboutDetails = styled.div`
    margin: auto;
    padding: 0 30px;
    flex: 1;

    h2{
        font-size: 65px;
        border-bottom: 4px solid #569814;
        font-weight: 500;

        @media screen and (max-width: 400px){
            font-size: 35px;
        }
    }

    p{
        font-size: 19px;
        font-weight: 300;
        padding-top: 8px;

        @media screen and (max-width: 400px){
            font-size: 16px;
        }
    }
`;

export const AboutImage = styled.div`
    margin: auto;
    flex: 1;
    padding-right: 30px;

    img{
        width: 100%;

        @media screen and (max-width: 800px){
            padding: 30px;
        }
    }
`;