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
        width: 295px;
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

    .all-except-profile-img .emote-photo-counter-send{
        width: 95%;
        margin-bottom: 6px;
        padding-top: 6px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .all-except-profile-img .emote-photo-counter-send .warning-0{
        font-weight: bold;
        text-align: center;
        color: red;
        font-size: 12px;

        width: 110px;
    }  

    .all-except-profile-img .emote-photo-counter-send .warning-over-140{
        font-weight: bold;
        text-align: center;
        color: red;
        font-size: 12px;

        width: 110px;
    }    

    .all-except-profile-img .emote-photo-counter-send .emote-photo img{
        height: 16px;
        margin-right: 10px;
    }

    .all-except-profile-img .emote-photo-counter-send .counter-send{
        width: 120px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .all-except-profile-img .emote-photo-counter-send .counter-send span{
        font-size: 14px;
    }

    .all-except-profile-img .emote-photo-counter-send .counter-send .red{
        font-size: 14px;
        color: red;
    }

    .all-except-profile-img .emote-photo-counter-send .counter-send .blocked{
        width: 57px;
        height: 21px; 
        background-color: #FCA311;
        text-align: center;

        opacity: 60%;

        font-size: 14px;
        font-family: 'Quicksand', sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;
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
            width: 713px;
            border-bottom: 5px;
            height: 74px;

            font-size: 17px;
        }

        .all-except-profile-img .emote-photo-counter-send{
            width: 93%;
            margin-bottom: 8px;
            padding: 0;
        }

        
        .all-except-profile-img .emote-photo-counter-send .warning-0{
            font-size: 18px;

            width: 388.59px;
        }

        .all-except-profile-img .emote-photo-counter-send .warning-over-140{
            font-size: 18px;

            width: 388.59px;
        }

        .all-except-profile-img .emote-photo-counter-send .emote-photo img{
            height: 20px;
            margin-right: 15px;
        }

        .all-except-profile-img .emote-photo-counter-send .counter-send{
            width: 160px;
        }

        .all-except-profile-img .emote-photo-counter-send .counter-send span{
            font-size: 16px;
        }

        .all-except-profile-img .emote-photo-counter-send .counter-send .red{
            font-size: 16px;
        }

        .all-except-profile-img .emote-photo-counter-send .counter-send .blocked{
            width: 76px;
            height: 27px;

            font-size: 17px;
        }
    }
`
