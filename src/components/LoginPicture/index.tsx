import React from 'react';

import imageLogin from '../../assets/images/image-login.svg';

import{
    PageLeft
} from './styles';

function LoginPicture(){
    return(
        <PageLeft>
            <img src={imageLogin} alt="Imagem Login"/>
        </PageLeft>
    )
}

export default LoginPicture;