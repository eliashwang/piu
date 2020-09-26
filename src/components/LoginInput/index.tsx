import React, {InputHTMLAttributes} from 'react';

import{
    Input
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    placeholder: string;
}

const LoginInput: React.FC<InputProps> = ({type, placeholder}) => {
    return(
        <Input type={type} placeholder={placeholder}/>
    )
}

export default LoginInput;