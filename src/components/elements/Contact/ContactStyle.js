import styled from "styled-components";

export const ContactWrap = styled.div`
    min-height: 90vh;
`;

export const ContactTag = styled.div`
    text-align: center;
    padding-top: 30px;
    width: 60%;
    margin: auto;

    @media screen and (max-width: 800px){
        width: 100%;
    }

    h2{
        font-size: 45px;
        color: #569814;
        font-weight: 500;

        @media screen and (max-width: 400px){
            font-size: 30px;
        }   
    }

    p{
        color: white;
        font-size: 17px;

        @media screen and (max-width: 400px){
            font-size: 14px;
        } 
    }
`;

export const ContactForm = styled.div`
    background-color: white;
    width: 45%;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    padding: 20px;

    @media screen and (max-width: 800px){
        width: 85%;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -55%);
    }

    @media screen and (max-width: 400px){
        width: 95%;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -48%);
    } 

    h4{
        font-size: 22px;
        color: #569814;
        margin-bottom: 15px;
    }

    .name{

        input{
            width: 49%;
            padding: 8px;
            border: 1px solid #424242;
            outline: none;
            border-radius: 4px;
            

            @media screen and (max-width: 800px){
                width: 48%;    
            }

            @media screen and (max-width: 400px){
                display: flex;
                flex-direction: column;
                width: 100%;
            }
        }

        .firstN{
            margin-right: 5px;

            @media screen and (max-width: 400px){
                margin-right: 0;
                margin-bottom: 12px;
            }
        }

        .lastN{
            margin-left: 5px;

            @media screen and (max-width: 400px){
                margin-left: 0;
            }
        }
    }

    input{
        width: 100%;
        padding: 8px;
        margin: 7px 0;
        border: 1px solid #424242;
        border-radius: 4px;
    }

    button{
        background-color: #569814;
        color: white;
        padding: 8px;
        width: 25%;
        margin: 10px 0;
        border-radius: 4px;
        outline: none;
        border: none;
        cursor: pointer;
    }
`;