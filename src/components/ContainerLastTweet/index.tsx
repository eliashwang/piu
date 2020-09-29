import React from 'react';

import{
    LastTweet   
} from './styles';

import { CadaPiu } from '../../pages/Feed';

import logoLike from '../../assets/images/like.svg';
import logoRetweet from '../../assets/images/retweet.svg';
import logoComment from '../../assets/images/comment.svg';
import logoExclude from '../../assets/images/x.svg';

interface ContainerLastTweetProps{
    cadapiu: CadaPiu
}

const ContainerLastTweet: React.FC<ContainerLastTweetProps> = ({ cadapiu }) => {
    return(
        <LastTweet>
            <img src={cadapiu.usuario.foto} alt="Foto de Perfil" className="foto-de-perfil"/>
            <div className="tweet-except-profile-img">
                <div className="name-login-exclude">
                    <div className="name-login">
                        <strong>{ cadapiu.usuario.first_name } + { cadapiu.usuario.last_name }</strong>
                        <span>{ cadapiu.usuario.username }</span>
                    </div>
                    <input type="image" src={logoExclude} alt="Imagem de Perfil"/>
                </div>
                <span className="message">{ cadapiu.texto }</span>
                <div className="like-retweet-comment">
                    <input type="image" src={logoLike} alt="Curtir"/><span> {cadapiu.likers.length}</span>
                    <input type="image" src={logoRetweet} alt="Retweetar"/><span>0</span>
                    <input type="image" src={logoComment} alt="Comentar"/><span>0</span>
                </div>
            </div>
        </LastTweet>
    )
}

export default ContainerLastTweet;