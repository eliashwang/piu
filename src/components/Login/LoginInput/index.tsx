import React, {InputHTMLAttributes} from 'react';

import{
    Input
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    placeholder: string;
    onChange(e: any): void
}

const LoginInput: React.FC<InputProps> = ({type, placeholder, onChange}) => {
    return(
        <Input type={type} placeholder={placeholder} onChange={onChange}/>
    )
}

export default LoginInput;