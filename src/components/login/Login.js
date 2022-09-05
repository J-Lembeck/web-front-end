import React from 'react'
import {
    useNavigate
  } from "react-router-dom"
import axios from 'axios'
import './Login.css'


const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');

    const handleCLick = () => {
        axios.post(`http://localhost:3333/login/`,{
            username: user,
            password: pass,
        })
        .then((response) => {
            
            axios.get(`http://localhost:3333/validateLogin/`, {
                headers:{
                    gfg_token_header_key: response.data,
                }
            })
            .then((res) => {
                console.log(res)
                navigate('/home')
            })
        })
        .catch((error) => {
            console.log(error)
        })

    }

    const handlePass = (e) => {
        console.log(e)
    }

    return (
        <div className='background'>
            <div className='modal'>
                <div className='titulo'>
                    <h1>
                        Login
                    </h1>
                </div>
                <div className='inputs'>
                    <div className='icons-left'>
                        <i className='bx bx-user icon'></i>
                    </div>
                    <input type={'text'} placeholder={'Digite seu usuário'} className='input' id='iUser' onChange={(e) => {setUser(e.target.value)}}></input>
                </div>
                <div className='inputs'>
                    <div className='icons-left'>
                        <i className='bx bx-key icon'></i>  
                    </div>
                    <input type={'password'} placeholder={'Digite sua senha'} className='input' id='iPass' onChange={(e) => {setPass(e.target.value)}}></input>
                    <div className='icons-right show' onClick={handlePass}>
                        <i class='bx bx-low-vision icon eye hide' id='iShow'></i>
                        <i class='bx bx-show icon eye show' id='iHide'></i>
                    </div>
                </div>
                <a href='#' className='forgot'>Esqueceu a senha?</a>
                <div className='buttons'>
                    <div className='button' onClick={handleCLick}>Entrar</div>
                </div>
            </div>
        </div>
    )
}

export default Login