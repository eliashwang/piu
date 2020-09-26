import styled from 'styled-components';

export const Header = styled.header`
    height: 28px;
    border: 1px solid;
    background-color: #FCA311;

    display: flex;
    align-items: center;
    justify-content: center;

    strong{
        font-size: 18px;
    }

    @media (min-width: 800px){     
        height: 40px;

        strong{
            font-size: 24px;
        }
    }
`