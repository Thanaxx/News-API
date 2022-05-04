import styled from "styled-components";

export const NewsmainPage = styled.div`
    min-height: 100vh;
    padding: 50px 20px;
`;

export const MainStories = styled.div`
    min-height: 100vh;
    display: flex;
    
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;

export const AllNews = styled.div`
    flex: 2;
`;

export const Headlines = styled.div`
    flex: 1;
`;

export const TopStories = styled.div`

`;

export const SimilarNews = styled.div`
     
`;