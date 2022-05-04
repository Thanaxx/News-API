import styled from "styled-components";

export const AllNewsWrap = styled.div`
    margin: 30px 20px;
    color: white;
`;

export const Title = styled.div`
    border-bottom: 3px solid #569814;

    h3{
        font-size: 35px;
        font-weight: 400;
    }
`;

export const NewsNames = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
    margin: 30px 0;

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NewsBox = styled.div`

    a{
        text-decoration: none;
        color: white;
    }

    img{
        width: 100%;
        height: 350px;

        @media screen and (max-width: 400px){
            height: 310px;
        }
    }

    h3{
        font-weight: 500;
        font-size: 20px;
        padding-bottom: 10px;
    }

    p{
        color: #C1C1C1;
    }
`;