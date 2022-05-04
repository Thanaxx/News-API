import styled from "styled-components";

export const MoreNewsWrap = styled.div`
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
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 1rem;
    padding: 20px;

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }
`; 

export const NewsCard = styled.div`

    a{
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width: 400px){
            flex-direction: column;
        }

        @media screen and (max-width: 800px){
            flex-direction: column;
        }
    }
`;

export const Picture = styled.div`
    img{
        width: 150px;
        height: 130px;

        @media screen and (max-width: 400px){
            width: 100%;
            height: 310px;
        }

        @media screen and (max-width: 800px){
            width: 100%;
            height: 350px;
        }
    }
`;

export const Details = styled.div`
    padding: 0 6px;

    .author{
        font-size: 13px;
        font-style: italic;
        color: #939393;
    }

    h3{
        font-weight: 500;
        font-size: 17px;
    }

    p{
        padding: 3px 0;
        font-size: 14px;
        color: #C1C1C1;
    }
`; 