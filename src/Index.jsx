import React, { createContext, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from './pages/HomePage/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'

export const NombreContexto = createContext()

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        id: "",
        name: "",
        username: "",
        role: "",
    });

    const routes = createBrowserRouter([
        {
            errorElement: <NotFoundPage />,
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/loginPage',
                    element: <LoginPage />
                },
                {
                    path: '/HomePage',
                    element: <HomePage />
                }
            ]
        }
    ])
    
    return (
        <NombreContexto.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </NombreContexto.Provider>
    )
}
