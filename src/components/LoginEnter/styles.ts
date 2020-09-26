import styled from 'styled-components';

export const Enter = styled.div`
    background-color: #FCA311;
    width: 150px;
    height: 30px;

    text-align: center;
    font-size: 15px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    
    a{
        text-decoration: none;
        color: #000000;
    }

    @media (min-width: 800px){
        background-color: #FCA311;
        width: 260px;
        height: 70px;

        text-align: center;
        font-size: 24px;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;
        
        a{
            text-decoration: none;
            color: #000000;
        }
    }
`