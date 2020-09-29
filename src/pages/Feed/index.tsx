import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import{
    LastTweets
} from './styles';

import { useAuth } from '../../hooks/useAuth';

import PageHeader from '../../components/PageHeader';
import ComponentShareTweet from '../../components/ContainerShareTweet';
import LastTweetsHeader from '../../components/LastTweetsHeader';
import ContainerLastTweet from '../../components/ContainerLastTweet';

export interface CadaPiu{
    favoritado_por: Array<object>;
    horario: string;
    id: number;
    likers: Array<object>;
    texto: string;
    usuario: Usuario;
}

export interface Usuario{
    email: string;
    first_name: string;
    foto: string;
    id: number;
    last_name: string;
    sobre: string;
    username: string;
}

function Feed(){
    const [piu, setPiu] = useState([]);

    const { token } = useAuth();

    useEffect(() => {
        api.defaults.headers.authorization = `JWT ${token}`

        api.get('/pius/').then(response => {
            console.log(response.data);
            setPiu(response.data)
        });       

    }, [token]);

    return(
        <div className="feed">
            <PageHeader/>
            <ComponentShareTweet/>
            <LastTweets>
                <LastTweetsHeader/>
                {piu.map((cadapiu: CadaPiu) => {
                    return <ContainerLastTweet key={cadapiu.id} cadapiu={cadapiu}/>;
                })}
            </LastTweets>
        </div>
    );
}

export default Feed;