import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { publicRequest, userRequest } from '../RequestMethods'
import { useAuthContext } from './useAuthContext'
import { useUserContext } from './useUserContext'
import { usePropertyContext } from './usePropertyContext'

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
    const { dispatch } = useUserContext()

    const CreateUser = async (user) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await userRequest.post("/users",user)
            dispatch({type:'CREATE_USER', payload: res})
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
    const { dispatch } = usePropertyContext()

    const CreateProperty = async (property) => {
        try{
            setIsLoading(true)
            setError(null)

            const res = await userRequest.post("/property",property)
            dispatch({type:'CREATE_PROPERTY', payload: res})
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),10000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
            setTimeout(() => setError(false),10000)
        }

    }
    return {CreateProperty, isLoading, error, success, successMessageDisplay,}
}

//DELETE PROPERTY
export const useDeleteProperty = () => {
    const { dispatch } = usePropertyContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const DeleteAProperty = async (id) => {
        try{
            setIsLoading(true)
            setError(null)
            const user = await userRequest.delete(`/property/${id}`)
            dispatch({type:'DELETE_PROPERTY', payload: user})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { DeleteAProperty }
        
}
//GET ALL USERS
// export const useGetAllUsers = () => {
//     const { dispatch } = useUserContext()
//     const [error, setError] = useState(null)
//     const [success, setSuccess] = useState(null)
//     const [isLoading, setIsLoading] = useState(null)

//     const GetAllUsers = async () => {
//         try{
//             setIsLoading(true)
//             setError(null)
//             const users = await userRequest.get("/users")
//             dispatch({type:'SET_USERS', payload: users})
//             setIsLoading(false)
//             setSuccess(true)
//             console.log(users)
//         }catch(err){
//             setIsLoading(false)
//             setError(err.response.data)
//         }

//     }
//     return {GetAllUsers}
// }

//DELETE A USER
export const useDeleteUser = () => {
    const { dispatch } = useUserContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const DeleteAUser = async (id) => {
        try{
            setIsLoading(true)
            setError(null)
            const user = await userRequest.delete(`/users/${id}`)
            dispatch({type:'DELETE_USER', payload: user})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { DeleteAUser }
        
}