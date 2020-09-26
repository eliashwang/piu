import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';

import api from '../services/api';

interface AuthState{
    token: string;
    user: object;
}

interface AuthContextData{
    user: object;
    login(user: object): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);

    useEffect(() => {
        async function carregarDadosUsuario(){
            const user = await localStorage.getItem('@Project:cred');
            const token = await localStorage.getItem('@Project:token');

            if(user && token){
                api.defaults.headers.authorization = `JWT ${token}`;
                setData({user: JSON.parse(user), token: token});
            }
        }
        carregarDadosUsuario()

    }, []);

    const login = useCallback(async (cred) => {

        const response = await api.post('/login/', cred)
        const {user, token} = response.data;
        await localStorage.setItem('@Project:cred', JSON.stringify(user));
        await localStorage.setItem('@Project:token', token);

        api.defaults.headers.authorization = `JWT ${token}`;

        setData(response.data);
    }, [])

    return(
        <AuthContext.Provider value = {{user: data.user, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}

// O QUE FAZER NUMA OUTRA PARTE DO CÓDIGO

// import AuthContext from '....'
// Acesso ao AuthContext de qualquer lugar do código
// const context = useContext(AuthContext);
// context.user