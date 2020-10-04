import React from 'react';

import{
    Logout
} from './styles';

import logoLogout from '../../../assets/images/logout.svg';

interface ReactProps{
    onClick(e: any): void
}

const LogoutButton: React.FC<ReactProps> = ({onClick}) => {
    return(
        <Logout onClick={onClick}>
            <img src={logoLogout} alt="Logout"/>
        </Logout>
    )
}

export default LogoutButton;