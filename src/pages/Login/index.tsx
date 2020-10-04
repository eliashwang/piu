import React, {useState, useCallback} from 'react';

import LoginPicture from '../../components/Login/LoginPicture';
import LogoAndDescription from '../../components/Login/LogoAndDescription';
import LoginInput from '../../components/Login/LoginInput';
import LoginEnter from '../../components/Login/LoginEnter';
import LoginRegister from '../../components/Login/LoginRegister';

import {useAuth} from '../../hooks/useAuth';

import{
    Page, PageRight, LoginPwEnter, ForgotRegister
} from './styles';

function Login(){
    const { login } = useAuth()

    const [countLogin, setCountLogin] = useState(0);
    const [countPw, setCountPw] = useState(0);

    const [cred, setCred] = useState({
        username: '',
        password: '',
    });

    const handleLogin = useCallback(e => {
        e.preventDefault()
        login(cred, countLogin, countPw);
    }, [cred, login]);

    const onChangeUsername = useCallback(e => {
        setCred({...cred, username: e.target.value})
        setCountLogin(e.target.value.length)
    }, [setCred, cred]);

    const onChangePassword = useCallback(e => {
        setCred({...cred, password: e.target.value})
        setCountPw(e.target.value.length)
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