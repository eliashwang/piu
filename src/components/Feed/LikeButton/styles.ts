import styled from 'styled-components';

export const Like = styled.button`
    background: none;
    border: 0;

    width: 15px;
    height: 15px;

    &:hover{
        cursor: pointer;
    }
            
    &:focus{
        outline: none;
    }

    img{
        width: 15px;
        height: 15px;
    }


    @media (min-width: 800px){
        width: 20px;
        height: 20px;

        img{
            width: 20px;
            height: 20px;
        }
    }
`