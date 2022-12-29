import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {AuthContextProvider} from './context/AuthContext'
import {PropertyContextProvider} from './context/PropertyContext'
import {UserContextProvider} from './context/UserContext'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <UserContextProvider>
    <AuthContextProvider>
    <PropertyContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PropertyContextProvider>
    </AuthContextProvider>
    </UserContextProvider>
)