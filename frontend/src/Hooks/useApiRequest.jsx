//EXTERNAL IMPORTS
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'

//INTERNAL IMPORTS
import { publicRequest, userRequest } from '../RequestMethods'
import { useAuthContext } from './useAuthContext'
import { useUserContext } from './useUserContext'
import { usePropertyContext } from './usePropertyContext'
import { useSubscriptionContext } from './useSubscriptionContext'

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
    const [errorMessageDisplay,setErrorMessageDisplay] = useState(false)
    const { dispatch } = useUserContext()

    const CreateUser = async (user) => {
        try{
            setError(null)

            const res = await userRequest.post("/users",user)
            console.log(res)
            dispatch({type:'CREATE_USER', payload: res})
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),6000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
            setErrorMessageDisplay(true)
            setTimeout(() => setErrorMessageDisplay(false),6000)
        }

    }
    return {CreateUser, isLoading,setIsLoading, error, success,setError,setErrorMessageDisplay, successMessageDisplay,errorMessageDisplay}
}

//UPDATE A USER
export const useUpdateUser = () => {
    const { dispatch } = useUserContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const UpdateUser = async (id,user) => {
        try{
            setIsLoading(true)
            setError(null)
            const updatedUser = await userRequest.put(`/users/${id}`,user)
            dispatch({type:'UPDATE_USER', payload: updatedUser})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { UpdateUser }
        
}

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

//CREATE PROPERTY
export const useCreateProperty = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(true)
    const [errorMessageDisplay,seterrorMessageDisplay] = useState(false)
    const { dispatch } = usePropertyContext()

    const CreateProperty = async (property) => {
        try{
            const res = await userRequest.post("/property",property)
            dispatch({type:'CREATE_PROPERTY', payload: res})
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),6000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreateProperty, isLoading,setIsLoading,
         error, setError, success, successMessageDisplay,
         errorMessageDisplay,seterrorMessageDisplay
    }
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

//UPDATE PROPERTY
export const useUpdateProperty = () => {
    const { dispatch } = usePropertyContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const UpdateProperty = async (id,property) => {
        try{
            setIsLoading(true)
            setError(null)
            const updatedProperty = await userRequest.put(`/property/${id}`,property)
            dispatch({type:'UPDATE_PROPERTY', payload: updatedProperty})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { UpdateProperty }
        
}

//SUBSCRIBE TO NEWSLETTER
export const useSubscription = () => {
    const { dispatch } = useSubscriptionContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(true)

    const Subscribe = async (form) => {
        try{
            setError(null)
            const subscriber = await publicRequest.post('/subscribe',form)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),6000)
            return subscriber
        }catch(err){
            setError(err.response.data)
            console.log(err)
        }
    }
    return { Subscribe,success,successMessageDisplay,error}
        
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



