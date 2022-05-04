import styled from "styled-components";

export const HeroWrap = styled.div`
    min-height: 90vh;
`;

export const HeroText = styled.div`
    width: 75%;
    margin: auto;
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -37%);

    @media screen and (max-width: 800px){
        width: 100%;
    }

    @media screen and (max-width: 400px){
        width: 100%;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -40%);
    }

    h3{
        font-size: 120px;
        text-align: center;
        font-family: 'Cinzel', serif;
        color: #569814;
        font-weight: 400;
        line-height: 105px;

        @media screen and (max-width: 800px){
            font-size: 80px;
        }

        @media screen and (max-width: 400px){
            font-size: 55px;
        }
    }
`;


export const TextBetween = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;

    .lpar{
        flex: 2;
        font-size: 120px;
        font-weight: 500;

        @media screen and (max-width: 800px){
            font-size: 80px;
            text-align: center;
        }

        @media screen and (max-width: 400px){
            font-size: 55px;
        }
    }

    .rpar{
        flex: 1;
        font-size: 16px;
        text-align: right;
        color: #6D7763;

        @media screen and (max-width: 1200px){
            display: none;
        }
    }
`;

export const SeeNewsArrow = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 45px;
    animation: MoveUpDown 2s linear infinite;

    @keyframes MoveUpDown {
        0%, 100%{
            bottom: 10px;
        }
        50% {
            bottom: 30px;
        }
    }
    .arrow{
        cursor: pointer;
        color: #FFFFFF;
        border-radius: 100%;
        box-shadow: 0 4px 15px #569814;
    }
`;