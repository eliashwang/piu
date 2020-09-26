import styled from 'styled-components';

export const ShareTweet = styled.div`
    height: 110px;
    margin: 25px 30px 20px 30px;
    border: 1px solid;

    display: flex;
    align-items: center;
    justify-content: center;

    .foto-perfil{
        height: 80px;
        margin: 0 15px 0 15px;
    }

    .all-except-profile-img{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .all-except-profile-img textarea{
        border: 0;
        padding: 0;
        margin-top: 20px;
        width: 311.59px;
        height: 57px;
        resize: none;
        overflow: hidden;

        font-size: 13px;
        font-family: 'Quicksand', sans-serif;
    
        &:focus{
            overflow: hidden;
            outline: none;
            border-bottom: 1px solid #000000;
            /* Como coloco um transition pro border-bottom? */
        }
    }

    .all-except-profile-img .emote-photo-send{
        width: 95%;
        margin-bottom: 6px;
        padding-top: 6px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .all-except-profile-img .emote-photo-send img{
        height: 16px;
        margin-right: 10px;
    }

    .all-except-profile-img .emote-photo-send .send{
        width: 57px;
        height: 21px; 
        background-color: #FCA311;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .all-except-profile-img .emote-photo-send .send a{
        text-decoration: none;
        color: #000000;
        font-size: 14px; 
    }

    @media (min-width: 800px){
        height: 150px;
        margin: 30px 200px 30px 200px;

        .foto-perfil{
            height: 120px;
            margin: 0 30px 0 30px;
        }

        .all-except-profile-img{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .all-except-profile-img textarea{
            margin-top: 30px;
            width: 725px;
            border-bottom: 5px;
            height: 74px;

            font-size: 17px;
            font-family: 'Quicksand', sans-serif;
        }

        .all-except-profile-img .emote-photo-send{
            width: 93%;
            margin-bottom: 8px;
            padding: 0;
        }

        .all-except-profile-img .emote-photo-send img{
            height: 20px;
            margin-right: 15px;
        }

        .all-except-profile-img .emote-photo-send .send{
            width: 76px;
            height: 27px; 
        }

        .all-except-profile-img .emote-photo-send .send a{
            font-size: 17px; 
        }
    }
`
