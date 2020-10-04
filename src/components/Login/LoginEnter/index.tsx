import React from 'react';

import{
    Enter
} from './styles';

interface ReactProps{
    onClick(e: any): void
}

const LoginEnter: React.FC<ReactProps> = ({onClick}) => {
    return(
        <Enter onClick={onClick}>
            <a href="/#">Entrar</a>
        </Enter>
    )
}

export default LoginEnter;