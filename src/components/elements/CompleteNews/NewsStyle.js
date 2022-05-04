import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
`;

export const SearchBox = styled.div`
    margin-bottom: 30px;
`;

export const InputSearch = styled.div`
    width: 60%;
    background-color: transparent;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 8px 15px;
    align-items: center;
    border-radius: 50px;
    border: 1px solid #4B4B4B;

    @media screen and (max-width: 600px){
        width: 100%;
    }

    input{
        width: 100%;
        font-size: 16px;
        background-color: transparent;
        border: none;
        outline: none;
        color: white
    }

    span{
        font-size: 20px;
        color: white
    }
`;

export const NewsWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 1.5rem;
    padding: 20px;

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NewsBox = styled.div`
    text-decoration: none;
    color: white;

    a{
        text-decoration: none;
        color: white;
    }

    img{
        width: 100%;
        height: 330px;

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

// load more news
export const LoadMore = styled.div`
    text-align: center;
    margin: 50px 0;

    button{
        background-color: transparent;
        color: #569814;
        font-size: 40px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.5s;

        :hover{
            transform: scale(1.2);
        }
    }

`;