import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {AuthContextProvider} from './context/AuthContext'
import {PropertyContextProvider} from './context/PropertyContext'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <AuthContextProvider>
    <PropertyContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PropertyContextProvider>
    </AuthContextProvider>
)