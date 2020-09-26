import React from 'react';

import{
    Header 
} from './styles';

import logoPiupiuwer from '../../assets/images/logo-piupiuwer.svg';
import logoHome from '../../assets/images/home.svg';
import logoProfile from '../../assets/images/profile.svg';
import logoConfig from '../../assets/images/config.svg';
import logoLogout from '../../assets/images/logout.svg';

function PageHeader(){
    return(
        <Header>
            <img src={logoPiupiuwer} alt="Piupiuwer" className="logo"/>
            <div className="search">
                <input type="text" placeholder="Pesquisar"/>
            </div>
            <nav>
                <a href=""><img src={logoHome} alt="Home"/></a>
                <a href=""><img src={logoProfile} alt="Perfil"/></a>
                <a href=""><img src={logoConfig} alt="Configurações"/></a>
                <a href=""><img src={logoLogout} alt="Logout"/></a>
            </nav>
        </Header>
    )
}

export default PageHeader;