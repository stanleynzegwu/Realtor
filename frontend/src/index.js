import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {AuthContextProvider} from './context/AuthContext'
import {BlogContextProvider} from './context/BlogContext'
import {PagesContextProvider} from './context/PagesContext'
import {PropertyContextProvider} from './context/PropertyContext'
import {ReviewContextProvider} from './context/ReviewContext'
import {UserContextProvider} from './context/UserContext'
import {SubscriptionContextProvider} from './context/SubscriptionContext'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <PagesContextProvider>
    <PropertyContextProvider>
    <AuthContextProvider>
    <BlogContextProvider>
    <ReviewContextProvider>
    <SubscriptionContextProvider>
    <UserContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserContextProvider>
    </SubscriptionContextProvider>
    </ReviewContextProvider>
    </BlogContextProvider>
    </AuthContextProvider>
    </PropertyContextProvider>
    </PagesContextProvider>
)