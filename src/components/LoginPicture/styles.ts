import styled from 'styled-components';

export const PageLeft = styled.div`
    margin: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 1px solid;

    img{
        width: 270px;
    }

    @media (min-width: 800px){
        border-right: 2px solid;

        img{
            width: 520px;
        }
    }
`  