import React from 'react';

import{
    LastTweet   
} from './styles';

import profileImg from '../../assets/images/profileimg.svg'
import logoLike from '../../assets/images/like.svg';
import logoRetweet from '../../assets/images/retweet.svg';
import logoComment from '../../assets/images/comment.svg';
import logoExclude from '../../assets/images/x.svg';

function ContainerLastTweet(){
    return(
        <LastTweet>
            <img src={profileImg} alt="Foto de Perfil" className="foto-de-perfil"/>
            <div className="tweet-except-profile-img">
                <div className="name-login-exclude">
                    <div className="name-login">
                        <strong>Elias Hwang</strong>
                        <span>@EliasHwang</span>
                    </div>
                    <input type="image" src={logoExclude}/>
                </div>
                <span className="message">Bom dia! Como vocês estão? Hoje acordei um pouco mais
                feliz do que o normal!
                </span>
                <div className="like-retweet-comment">
                    <input type="image" src={logoLike} alt="Curtir"/><span>0</span>
                    <input type="image" src={logoRetweet} alt="Retweetar"/><span>0</span>
                    <input type="image" src={logoComment} alt="Comentar"/><span>0</span>
                </div>
            </div>
        </LastTweet>
    )
}

export default ContainerLastTweet;