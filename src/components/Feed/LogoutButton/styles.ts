import styled from 'styled-components';

export const Logout = styled.button`
    border: 0;
    width: 18px;
    height: 18px;

    background: none;

    &:hover{
        outline: none;
        cursor: pointer;
    }

    @media (min-width: 800px){
        width: 25px;
        height: 25px;
    }
`