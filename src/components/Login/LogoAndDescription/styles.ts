import styled from 'styled-components';

export const LogoDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 195px;
        margin: 80px 0 10px 0;
    }

    span{
        font-weight: light;
        font-size: 14px;
        margin-bottom: 55px;
    }

    @media (min-width: 800px){
        img{
            width: 430px;
            margin: 35px 0 15px 0;
        }

        span{
            font-size: 23px;
            margin-bottom: 50px;
        }
    }
`