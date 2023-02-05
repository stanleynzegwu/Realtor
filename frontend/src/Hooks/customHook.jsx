import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from "./useAuthContext";
import axios from 'axios';

export const UseId = () => {
    const [id,setId] = useState(0)

    const changeId = (idd) => setId(idd)

    return { id,changeId }
}
 

export const SetPasswordVisibility = () => {
    const [isVisible, setVisible] = useState(false)

    const changeVisibility = () =>  setVisible(prev => !prev)
    return {isVisible, changeVisibility}
}

export const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}

export const useHandleGoBack = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1);
    }

    return handleGoBack
}

export const useRequestMethods = () => {
    // const { user } = useAuthContext()
    // let token = user?.data.token
    const [token,setToken] = useState(() => localStorage.getItem("user") && (JSON.parse(localStorage.getItem("user")).data.token))
    
    const BASE_URL = "/api"

    const publicRequest = axios.create({
        baseURL: BASE_URL,
    })

    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers:{token:`Bearer ${token}`}
    })

    return { token,publicRequest, userRequest }
}


