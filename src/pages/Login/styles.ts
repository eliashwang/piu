import styled from 'styled-components';

export const Page = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
`

export const PageRight = styled.div`
    display: flex;
    flex-direction: column;

    width: 75%;
    height: 100%;

    @media (min-width: 800px){
        width: 60%;
    }
`

export const LoginPwEnter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ForgotRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .forgotpw{
        margin: 50px 0 40px 0;

        text-decoration: none;
        color: #2D58ED;
        font-size: 13px;
        font-weight: bold;
    }

    @media (min-width: 800px){
        .forgotpw{
            margin: 35px 0 30px 0;

            font-size: 16px;
        }
    }
`