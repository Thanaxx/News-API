import styled from "styled-components";

export const ServicesWrap = styled.div`
    padding: 20px 40px;
    color: #67814D;
`;

export const ServiceBox = styled.div`
    
`;

export const ServiceCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
    margin: 30px;

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 400px){
        gap: 2rem 1rem;
        margin: 30px 0;
    }
`;

export const Card = styled.div`
    background-color: white;
    border-radius: 3px;
    padding: 20px;

    img{
        width: 20px;
    }

    h4{
        padding: 5px 0;
        font-size: 22px;
    }

    p{
        padding: 5px 0;
        font-size: 14px;
    }

    a{
        color: #94A881;
        font-size: 13px;

    }
`;