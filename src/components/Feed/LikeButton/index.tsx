import React from 'react';

import{
    Like
} from './styles'

import logoLike from '../../../assets/images/like.svg';

interface ReactProps{
    onClick(e: any): void
}

const LikeButton: React.FC<ReactProps> = ({onClick}) => {
    return(
        <Like onClick={onClick}>
            <img src={logoLike} alt="Curtir"/>
        </Like>
    )
}

export default LikeButton;