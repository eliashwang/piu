import React, {createContext, useCallback, useContext, useState} from 'react';

import api from '../services/api';

interface AuthState{
    token: string;
    user: object;
}

interface AuthContextData{
    user: object;
    login(user: object): void;
    logout(): void;
    token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [userData, setUserData] = useState<AuthState>(() => {

        const user = localStorage.getItem('@Project:user');
        const token = localStorage.getItem('@Project:token');

        if(user && token){
            return {user: JSON.parse(user), token}
        }

        return {} as AuthState;
    });

    const login = useCallback(async (cred) => {

        try{
            const response = await api.post('/login/', cred)
            const {token} = response.data;
            localStorage.setItem('@Project:token', token);

            if (!!token) {
                const userResponse = await api.get(`usuarios/?search=${cred.username}`);
                const user = userResponse.data[0];
                localStorage.setItem('@Project:user', JSON.stringify(user));
        
                setUserData({token: token, user: user});
            }
        }
        catch{
            alert("Usuário ou senha incorreto");
        }

    }, [])

    const logout = () => {
        localStorage.removeItem('@Project:user');
        localStorage.removeItem('@Project:token');
    
        setUserData({} as AuthState);
    }
    
    return(
        <AuthContext.Provider value = {{user: userData.user, login, logout, token: userData.token}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}
