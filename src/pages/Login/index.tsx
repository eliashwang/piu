import React, {useState, useContext, useCallback} from 'react';

import axios from 'axios';

import LoginPicture from '../../components/LoginPicture';
import LogoAndDescription from '../../components/LogoAndDescription';
import LoginInput from '../../components/LoginInput';
import LoginEnter from '../../components/LoginEnter';
import LoginRegister from '../../components/LoginRegister';

import {useAuth} from '../../hooks/useAuth';

import{
    Page, PageRight, LoginPwEnter, ForgotRegister
} from './styles';

const usuario = 'usuário'
const senha = 'senha'
 
const response = await axios({
    url: 'http://piupiuwer.polijr.com.br/login/',
    method: 'POST',
    data: {
        username: usuario,
        password: senha
    }
})

console.log(response);

// const screens: React.FC = () => {
//     const [cred, setCred] = useState({
//         username: '',
//         password: ''
//     });
// }

// const {login} = useAuth();

// const handleLogin = useCallback(() => {
//     login(cred)
// }, [cred]);

function Login(){
    return (
        <Page>
            <LoginPicture/>
            <PageRight>
                <LogoAndDescription/>
                <LoginPwEnter>
                    <LoginInput type="text" placeholder="Login ou Email"/>
                    <LoginInput type="text" placeholder="Senha"/>
                    <LoginEnter/>
                </LoginPwEnter>
                <ForgotRegister>
                    <a href="" className="forgotpw">Esqueceu a senha?</a>
                    <LoginRegister/>
                </ForgotRegister>
            </PageRight>
        </Page>
    );
}

export default Login;