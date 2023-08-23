import React from 'react';
import Login from '../pages/Login.js';
import UserServices from '../services/UserServices.js'
import { useLocation } from 'react-router-dom';
const userService = new UserServices()
const RotasProtegidas = ({children}) =>{
    const { pathname } = useLocation();

        const verificaAutenticacao = userService.usuarioAutenticado()
        if(pathname === '/login' || pathname === '/register'){
        if(verificaAutenticacao){
            window.location.href = 'https://lista-anime.vercel.app'
        }else{
            return children 
        }
    }else{
        return verificaAutenticacao ? children : <Login/>
        }
    
}

export default RotasProtegidas