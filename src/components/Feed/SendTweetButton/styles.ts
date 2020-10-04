import styled from 'styled-components';

export const SendButton = styled.button`
    width: 57px;
    height: 21px; 
    background-color: #FCA311;

    display: flex;
    align-items: center;
    justify-content: center;

    a{
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: #000000;
    }

    @media (min-width: 800px){
        width: 76px;
        height: 27px;

        a{
            font-size: 17px; 
        }
    }
`
