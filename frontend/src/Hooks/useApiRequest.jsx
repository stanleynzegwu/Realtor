import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { publicRequest, userRequest } from '../RequestMethods'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const Signup = async (user) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await publicRequest.post("/auth/register",user)
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(res))
            //update the context
            dispatch({type:"SIGNUP", payload: res})
            setIsLoading(false)
            navigate(-1)
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { Signup, isLoading, error }
}

export const useLogin = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const Login = async (user) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await publicRequest.post("/auth/login",user)
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(res))
            //update the context
            dispatch({type:"LOGIN", payload: res})
            setIsLoading(false)
            navigate(-1)
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { Login, isLoading, error }
}

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
    localStorage.removeItem('user')
    dispatch({type:"LOGOUT"})
    }

    return {logout}
}

export const useCreateUser = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const CreateUser = async (user) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await userRequest.post("/users",user)
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreateUser, isLoading, error, success}
}