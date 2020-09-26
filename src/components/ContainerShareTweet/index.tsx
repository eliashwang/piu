import React from 'react';

import{
    ShareTweet
} from './styles'

import profileImg from '../../assets/images/profileimg.svg';
import logoEmote from '../../assets/images/emote.svg';
import logoPhoto from '../../assets/images/photo.svg';

function ComponentShareTweet(){
    return(
        <ShareTweet>
            <img src={profileImg} alt="Foto de Perfil" className="foto-perfil"/>
            <div className="all-except-profile-img">
                <textarea placeholder="O que deseja compartilhar?"/>
                <div className="emote-photo-send">
                    <nav className="emote-photo">
                        <a href=""><img src={logoEmote} alt="Emoticons"/></a>
                        <a href=""><img src={logoPhoto} alt="Fotos, Vídeos e Gifs"/></a>
                    </nav>
                    <nav className="send">
                        <a href="">Enviar</a>
                    </nav>
                </div>
            </div>
        </ShareTweet>
    )
}

export default ComponentShareTweet;