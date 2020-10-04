import React from 'react';

import{
    SendButton
} from './styles';

interface ReactProps{
    onClick(e: any): void;
}

const SendTweetButton: React.FC<ReactProps> = ({onClick}) => {
    return(
        <SendButton onClick={onClick}>
            <a href="/#">Enviar</a>
        </SendButton>
    )
}

export default SendTweetButton;