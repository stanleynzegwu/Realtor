import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {AuthContextProvider} from './context/AuthContext'
import {BlogContextProvider} from './context/BlogContext'
import {OfferContextProvider} from './context/OfferContext'
import {PagesContextProvider} from './context/PagesContext'
import {PropertyContextProvider} from './context/PropertyContext'
import {ReviewContextProvider} from './context/ReviewContext'
import {UserContextProvider} from './context/UserContext'
import {RestContextProvider} from './context/RestContext'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <PagesContextProvider>
    <PropertyContextProvider>
    <AuthContextProvider>
    <BlogContextProvider>
    <ReviewContextProvider>
    <RestContextProvider>
    <UserContextProvider>
    <OfferContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </OfferContextProvider>
    </UserContextProvider>
    </RestContextProvider>
    </ReviewContextProvider>
    </BlogContextProvider>
    </AuthContextProvider>
    </PropertyContextProvider>
    </PagesContextProvider>
)