import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { publicRequest, userRequest } from '../RequestMethods'
import { useAuthContext } from './useAuthContext'
import { useUserContext } from './useUserContext'

//USER SIGNUP
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

//USER LOGIN
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

//USER LOGOUT
export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
    localStorage.removeItem('user')
    dispatch({type:"LOGOUT"})
    }

    return {logout}
}

//CREATE USER
export const useCreateUser = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(true)

    const CreateUser = async (user) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await userRequest.post("/users",user)
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),10000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreateUser, isLoading, error, success, successMessageDisplay,}
}

//CREATE PROPERTY
export const useCreateProperty = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(true)

    const CreateProperty = async (property) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await userRequest.post("/property",property)
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),10000)
            console.log(res)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
            setTimeout(() => setError(false),10000)
        }

    }
    return {CreateProperty, isLoading, error, success, successMessageDisplay,}
}

//GET ALL USERS
export const useGetAllUsers = () => {
    const { dispatch } = useUserContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const GetAllUsers = async () => {
        try{
            setIsLoading(true)
            setError(null)
            const users = await userRequest.get("/users")
            dispatch({type:'SET_USERS', payload: users})
            setIsLoading(false)
            setSuccess(true)
            console.log(users)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {GetAllUsers, isLoading, error, success}
}