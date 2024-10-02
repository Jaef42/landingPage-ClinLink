import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import './login.css'

export const LoginPage = () => {
  return (
    <>
      <div className='contenedor-general'>
        <div className=''>
          {/* Aquí está tu barra de navegación */}
          <SideBar />
        </div>
        <div className='contenido'>
          <div className="login-lg"></div>
          <div className="login-block">
            <h1>Login</h1>
            <input name='username' type="text" placeholder="Username" id="username" />
            <input name='password' type="password" placeholder="Password" id="password" />
            <button>Iniciar</button>
          </div>
        </div>
      </div>
    </>
  )
}
