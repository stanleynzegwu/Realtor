//EXTERNAL IMPORTS
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'

//INTERNAL IMPORTS
import { publicRequest, userRequest } from '../RequestMethods'
import { useAuthContext } from './useAuthContext'
import { useUserContext } from './useUserContext'
import { usePropertyContext } from './usePropertyContext'
import { useReviewContext } from './useReviewContext'
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
            const property = await userRequest.delete(`/property/${id}`)
            dispatch({type:'DELETE_PROPERTY', payload: property})
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

//USER REVIEW
export const useUserReview = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)

    const CreateReview = async (id,review) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            const res = await userRequest.post(`/review/${id}`,review)
            console.log(res)
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { CreateReview, isLoading,success,error,setError}
}

////UPDATE REVIEW
export const useUpdateReview = () => {
    const { dispatch } = useReviewContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const UpdateReview = async (id,review) => {
        try{
            setIsLoading(true)
            setError(null)
            setSuccess(false)
            const updatedReview = await userRequest.put(`/review/${id}`,review)
            console.log(updatedReview)
            dispatch({type:'UPDATE_REVIEW', payload: updatedReview})
            setIsLoading(false)
            setSuccess(true)
            setTimeout(() => setSuccess(null),4000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { UpdateReview,success, isLoading }
        
}

//DELETE REVIEW
export const useDeleteReview = () => {
    const { dispatch } = useReviewContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const DeleteAReview = async (id) => {
        try{
            setIsLoading(true)
            setError(null)
            const review = await userRequest.delete(`/review/${id}`)
            dispatch({type:'DELETE_REVIEW', payload: review})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { DeleteAReview }
        
}

//OPENAI GENERATE IMAGE
export const useGenerateImage = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)

    const generateImg = async (imgDesc) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            const res = await userRequest.post('/openai/generateImage',imgDesc)
            console.log(res)
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            return res
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { generateImg }
}
//OPENAI GENERATE TEXT
export const useGenerateText = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)

    const generateText = async (textDesc) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            const res = await userRequest.post('/openai/generateText',textDesc)
            console.log(res)
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            return res
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { generateText }
}


export const useReviewFunction = () => {
    const { reviews } = useReviewContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const getReviewPercentage = (num) => {
        const reviewLength = reviews?.data.length
        const starNum = reviews?.data.filter((review) => review.star === num).length
        return Math.round((starNum * 100)/reviewLength)
    }

    const starNum = (num) => {
        return reviews && reviews?.data.filter((review) => review.star === num).length
    }
    const getPercentage = (num) => {
        return reviews && getReviewPercentage(num)
    }

    const totalReviews = () => {
        return reviews && reviews?.data.length
    }
    return { starNum, reviews, getReviewPercentage, getPercentage, totalReviews }
        
}