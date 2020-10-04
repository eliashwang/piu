import React from 'react';

import logoPiupiuwer from  '../../../assets/images/logo-piupiuwer.svg';

import{
    LogoDescription
} from './styles';

function LogoAndDescription(){
    return(
        <LogoDescription>
            <img src={logoPiupiuwer} alt="Logo Piupiuwer"/>
            <span>Se expresse e ouça os outros</span>
        </LogoDescription>
    )
}

export default LogoAndDescription