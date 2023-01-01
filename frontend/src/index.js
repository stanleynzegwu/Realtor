import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {AuthContextProvider} from './context/AuthContext'
import {PropertyContextProvider} from './context/PropertyContext'
import {UserContextProvider} from './context/UserContext'
import {SubscriptionContextProvider} from './context/SubscriptionContext'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <PropertyContextProvider>
    <AuthContextProvider>
    <SubscriptionContextProvider>
    <UserContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserContextProvider>
    </SubscriptionContextProvider>
    </AuthContextProvider>
    </PropertyContextProvider>
)