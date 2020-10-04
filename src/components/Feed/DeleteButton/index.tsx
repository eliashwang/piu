import React, { ButtonHTMLAttributes } from 'react';

import{
    Delete
} from './styles';

import logoExclude from '../../../assets/images/x.svg';

interface ReactProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    onClick(e: any): void;
}

const DeleteButton: React.FC<ReactProps> = ({onClick}) => {
    return(
        <Delete onClick={onClick}>
            <img src={logoExclude} alt="Excluir"/>
        </Delete>
    )
}

export default DeleteButton;