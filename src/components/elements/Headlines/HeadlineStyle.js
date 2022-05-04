import styled from "styled-components";

export const TopNewsWrap = styled.div`
    color: white;
    margin: 0 20px;
`

export const Title = styled.div`
    border-bottom: 3px solid #569814;

    h3{
        font-size: 35px;
        font-weight: 400;
    }
`

export const TopNames = styled.div`
 
`
export const HeadlineName= styled.div`
    cursor: pointer;
    margin: 20px 0;

    a{
        text-decoration: none;
        color: white;
    }

    h3{
        font-size: 18px;
        font-weight: 500;
        color: #569814;
    }

    .desc{
        padding: 4px 0;
    }

    .snippet{
        font-style: italic;
        color: #C1C1C1;
    }

    p{
        font-size: 13px;
    }
`