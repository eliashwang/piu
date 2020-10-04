import React, { useCallback, useState } from 'react';

import axios from 'axios';

import{
    ShareTweet
} from './styles'

import { useAuth } from '../../../hooks/useAuth';
import SendTweetButton from '../SendTweetButton';

import profileImg from '../../../assets/images/profileimg.svg';
import logoEmote from '../../../assets/images/emote.svg';
import logoPhoto from '../../../assets/images/photo.svg';

function ComponentShareTweet(){
    const { token, user } = useAuth();

    const [share, setShare] = useState('');

    const [count, setCount] = useState(0);

    const onChangeTextarea = useCallback(e => {
        setShare(e.target.value)
        setCount(e.target.value.length)

    }, [setShare, setCount]);
    
    const sendTweet = useCallback(async e => {
        const userId = user.id
        const mensagem = share;
            
        await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                texto: mensagem
            }
        })

    }, [share, token])

    return(
        <ShareTweet>
            <img src={profileImg} alt="Foto de Perfil" className="foto-perfil"/>
            <div className="all-except-profile-img">
                <textarea value={share} placeholder="O que deseja compartilhar?" onChange={onChangeTextarea}/>
                <div className="emote-photo-counter-send">
                    <nav className="emote-photo">
                        <a href="/#"><img src={logoEmote} alt="Emoticons"/></a>
                        <a href="/#"><img src={logoPhoto} alt="Fotos, Vídeos e Gifs"/></a>
                    </nav>
                    { count <= 0 ?
                    (<span className="warning-0">É necessário pelo menos 1 caracter.</span>) : (<></>) }
                    { count > 140 ?
                    (<span className="warning-over-140">Você ultrapassou os 140 caracteres!</span>) : (<></>) }
                    <div className="counter-send">
                        { count > 140 || count <= 0 ?
                        (<span className="red">{count}/140</span>) : (<span>{count}/140</span>) }
                        { count > 140 || count <= 0 ?
                        (<button type="button" className="blocked" disabled>Enviar</button>) : (<SendTweetButton onClick={sendTweet}/>) }
                    </div>
                </div>
            </div>
        </ShareTweet>
    )
}

export default ComponentShareTweet;