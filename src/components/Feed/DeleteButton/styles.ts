import styled from 'styled-components';

export const Delete = styled.button`
    background: none;
    border: 0;
    width: 9px;
    height: 9px;

    &:hover{
        cursor: pointer;
    }

    &:focus{
        outline: 0;
    }

    img{
        height: 9px;
    }

    @media (min-width: 800px){
        width: 12px;
        height: 12px;
    }

    img{
        height: 12px;
    }
`