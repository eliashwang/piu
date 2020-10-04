import styled from 'styled-components';

export const LastTweet = styled.div`
    height: 110px;
    border: 1px solid;

    display: flex;
    align-items: center;

    .foto-de-perfil{
        width: 64px;
        height: 64px;
        border-radius: 50%;

        object-fit: contain;

        margin: 15px;
    }

    .tweet-except-profile-img{
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .tweet-except-profile-img .name-login-exclude{
        width: 97%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tweet-except-profile-img .name-login-exclude .name-login strong{
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
        
    }

    .tweet-except-profile-img .name-login-exclude .name-login span{ 
        font-weight: 600;
        font-size: 12px;
    }

    .tweet-except-profile-img .message{
        width: 311.58px;
        font-size: 13px;
    }

    .tweet-except-profile-img .like-retweet-comment{
        display: flex;
        align-items: center;
    }

    .tweet-except-profile-img .like-retweet-comment input{
        height: 15px;
        
        &:focus{
            outline: none;
        }
    }

    .tweet-except-profile-img .like-retweet-comment span{
        margin: 0 12px 0 3px;

        font-size: 12px;
    }

    @media (min-width: 800px){     
        height: 150px;

        .foto-de-perfil{
            width: 120px;
            height: 120px;
            margin: 0 30px 0 30px;
        }

        .tweet-except-profile-img .name-login-exclude{
            width: 98%;
        }

        .tweet-except-profile-img .name-login-exclude .name-login strong{
            font-size: 21px;
            margin-right: 8px;
        }

        .tweet-except-profile-img .name-login-exclude .name-login span{ 
            font-size: 15px;
        }

        .tweet-except-profile-img .message{
            width: 706.8px;
            font-size: 15px;
        }

        .tweet-except-profile-img .like-retweet-comment input{
            height: 20px;
        }

        .tweet-except-profile-img .like-retweet-comment span{
            margin: 0 15px 0 3px;
            
            font-size: 14px;
        }
    }
`