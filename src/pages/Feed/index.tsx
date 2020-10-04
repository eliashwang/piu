import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import{
    LastTweets
} from './styles';

import { useAuth } from '../../hooks/useAuth';

import PageHeader from '../../components/Feed/PageHeader';
import ComponentShareTweet from '../../components/Feed/ContainerShareTweet';
import LastTweetsHeader from '../../components/Feed/LastTweetsHeader';
import ContainerLastTweet from '../../components/Feed/ContainerLastTweet';

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
    const [pius, setPius] = useState([]);

    const { token } = useAuth();
      
    useEffect(() => {
        api.defaults.headers.authorization = `JWT ${token}`

        api.get('/pius/').then(response => {
            setPius(response.data)
        });       

    }, [token]);

    return(
        <div className="feed">
            <PageHeader/>
            <ComponentShareTweet/>
            <LastTweets>
                <LastTweetsHeader/>
                {pius.map((cadapiu: CadaPiu) => {
                    return <ContainerLastTweet key={cadapiu.id} cadapiu={cadapiu} setPius={setPius} pius={pius}/>;
                })}
            </LastTweets>
        </div>
    );
}

export default Feed;