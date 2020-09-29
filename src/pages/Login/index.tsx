import React, {useState, useCallback} from 'react';

import LoginPicture from '../../components/LoginPicture';
import LogoAndDescription from '../../components/LogoAndDescription';
import LoginInput from '../../components/LoginInput';
import LoginEnter from '../../components/LoginEnter';
import LoginRegister from '../../components/LoginRegister';

import {useAuth} from '../../hooks/useAuth';

import{
    Page, PageRight, LoginPwEnter, ForgotRegister
} from './styles';

function Login(){
    const { login } = useAuth()

    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    const handleLogin = useCallback(e => {
        e.preventDefault()
        login(cred);
    }, [cred, login]);

    const onChangeUsername = useCallback(e => {
        setCred({...cred, username: e.target.value})
    }, [setCred, cred]);

    const onChangePassword = useCallback(e => {
        setCred({...cred, password: e.target.value})
    }, [setCred, cred]);

    return (
        <Page>
            <LoginPicture/>
            <PageRight>
                <LogoAndDescription/>
                <LoginPwEnter>
                    <LoginInput type="text" placeholder="Login ou Email" onChange={onChangeUsername}/>
                    <LoginInput type="password" placeholder="Senha" onChange={onChangePassword}/>
                    <LoginEnter onClick={handleLogin}/>
                </LoginPwEnter>
                <ForgotRegister>
                    <a href="/#" className="forgotpw">Esqueceu a senha?</a>
                    <LoginRegister/>
                </ForgotRegister>
            </PageRight>
        </Page>
    );
}

export default Login;