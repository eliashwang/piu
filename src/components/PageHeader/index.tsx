import React, { useCallback } from 'react';

import{
    Header 
} from './styles';

import LogoutButton from '../LogoutButton';
import { useAuth } from '../../hooks/useAuth';

import logoPiupiuwer from '../../assets/images/logo-piupiuwer.svg';
import logoHome from '../../assets/images/home.svg';
import logoProfile from '../../assets/images/profile.svg';
import logoConfig from '../../assets/images/config.svg';

function PageHeader(){
    const { logout } = useAuth();

    const handleLogout = useCallback(e => {
        e.preventDefault()
        logout()
    }, [logout])

    return(
        <Header>
            <img src={logoPiupiuwer} alt="Piupiuwer" className="logo"/>
            <div className="search">
                <input type="text" placeholder="Pesquisar"/>
            </div>
            <nav>
                <a href="/#"><img src={logoHome} alt="Home"/></a>
                <a href="/#"><img src={logoProfile} alt="Perfil"/></a>
                <a href="/#"><img src={logoConfig} alt="Configurações"/></a>
                <LogoutButton onClick={handleLogout}/>
            </nav>
        </Header>
    )
}

export default PageHeader;