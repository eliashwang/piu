import styled from 'styled-components';

export const Header = styled.header`
    background-color: #E5E5E5;
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        height: 28px;
        margin-left: 15px;
    }

    .search{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .search input{
        width: 110px;
        height: 22px;

        text-align: center;
        font-family: 'Quicksand', sans-serif;
        font-size: 12px;
        color: #5C5B57;

        &:focus{
            overflow: hidden;
            outline-color: #FCA311;
            opacity: 90%;
        }
    }

    nav{
        margin-right: 8px;
    }
    
    nav img{
        height: 18px;
        margin-right: 7px;
    }

    @media (min-width: 800px){
        height: 60px;

        .logo{
            height: 40px;
            margin-left: 50px;
        }

        .search input{
            width: 200px;
            height: 30px;

            font-size: 14px;
        }

        nav{
            margin-right: 30px;
        }

        nav img{
            height: 25px;
            margin-right: 20px;
        }
    }
`;