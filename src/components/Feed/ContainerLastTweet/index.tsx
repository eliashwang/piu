import React, { useCallback, useState } from 'react';

import{
    LastTweet   
} from './styles';

import axios from 'axios';

import { useAuth } from '../../../hooks/useAuth';
import { CadaPiu } from '../../../pages/Feed';
import DeleteButton from '../DeleteButton';
import LikeButton from '../LikeButton';

import logoRetweet from '../../../assets/images/retweet.svg';
import logoComment from '../../../assets/images/comment.svg';

interface ContainerLastTweetProps{
    cadapiu: CadaPiu;
    pius: Array<CadaPiu>;
    setPius(pius: any): void;
}

const ContainerLastTweet: React.FC<ContainerLastTweetProps> = ({ cadapiu, setPius, pius }) => {
    const { token, user } = useAuth();

    const handleDelete = useCallback(async (e, cadapiuid) => {
        await axios({
            url: `http://piupiuwer.polijr.com.br/pius/${cadapiuid}`,
            method: 'DELETE',
            headers: {
                Authorization: `JWT ${token}`
            }
        })

        const arrayPius: CadaPiu[] = []
        pius.forEach((piu) => {
            if(cadapiuid === piu.id){
                return;      
            }
            arrayPius.push(piu);
        })

        setPius(arrayPius)

    }, [cadapiu, token, pius])

    const [likes, setLikes] = useState(cadapiu.likers.length)

    const handleLikes = useCallback(async (e, cadapiuid) => {
        const userId = user.id
        const piuId = cadapiuid

        await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/dar-like/',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                piu: piuId
            }
        })

        const response = await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/',
            method: 'GET',
            headers: {
                Authorization: `JWT ${token}`
            },
        })

        const arrayNewPius: CadaPiu[] = []
        var i = 0
        for(i = 0 ; i < response.data.length ; i++){
            if(cadapiuid === response.data[i].id){
                setLikes(response.data[i].likers.length); 
            }
            arrayNewPius.push(response.data[i])
        }

        setPius(arrayNewPius)

    }, [user.id, token, pius, likes])

    return(
        <LastTweet>
            <img src={cadapiu.usuario.foto} alt="Foto de Perfil" className="foto-de-perfil"/>
            <div className="tweet-except-profile-img">
                <div className="name-login-exclude">
                    <div className="name-login">
                        <strong>{ cadapiu.usuario.first_name } { cadapiu.usuario.last_name }</strong>
                        <span>@{ cadapiu.usuario.username }</span>
                    </div>
                    { user.id === cadapiu.usuario.id &&
                        (<DeleteButton onClick = {(e) => { handleDelete(e, cadapiu.id)}}/>) 
                    }
                </div>
                <span className="message">{ cadapiu.texto }</span>
                <div className="like-retweet-comment">
                    <LikeButton onClick={(e) => {
                        handleLikes(e, cadapiu.id)
                        }}/>
                    <span>{cadapiu.likers.length}</span>
                    <input type="image" src={logoRetweet} alt="Retweetar"/><span>0</span>
                    <input type="image" src={logoComment} alt="Comentar"/><span>0</span>
                </div>
            </div>
        </LastTweet>
    )
}

export default ContainerLastTweet;