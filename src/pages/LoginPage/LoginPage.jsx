import React from 'react';
import { SideBar } from '../../components/SideBar/SideBar';
import logo from '../../assets/logotransp.png';

export const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center text-2xl font-bold mb-6">ClinLink</h1>
          <div className="flex justify-center mb-6">
            <img 
             src={logo} 
             alt="Logo de ClinLink" 
              className="w-16 h-16 object-contain rounded-full"
            />  
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              name="username"
              type="text"
              placeholder="Usuario"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">¿Aún no estás registrado?</p>
            <button className="mt-2 bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Regístrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
