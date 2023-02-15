//EXTERNAL IMPORTS
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//INTERNAL IMPORTS
import { publicRequest, userRequest } from '../RequestMethods'
import { useAuthContext } from './useAuthContext'
import { useBlogContext } from './useBlogContext'
import { useUserContext } from './useUserContext'
import { useOfferContext } from './useOfferContext'
import { usePropertyContext } from './usePropertyContext'
import { useReviewContext } from './useReviewContext'
import { useRestContext } from './useRestContext'

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
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(false)
    const [isLoading, setIsLoading] = useState(null)

    const UpdateUser = async (id,user) => {
        try{
            setIsLoading(true)
            setError(null)
            const updatedUser = await userRequest.put(`/users/${id}`,user)
            dispatch({type:'UPDATE_USER', payload: updatedUser})
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),6000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { UpdateUser,isLoading,success,successMessageDisplay,error }
        
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
            setTimeout(() => setSuccess(null),4000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { UpdateProperty,isLoading, success,error}
        
}

//SUBSCRIBE TO NEWSLETTER
export const useSubscription = () => {
    const { dispatch } = useRestContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(true)
    const [errorMessageDisplay,setErrorMessageDisplay] = useState(false)

    const Subscribe = async (form) => {
        try{
            setIsLoading(true)
            setError(null)
            const subscriber = await publicRequest.post('/subscribe',form)
            setIsLoading(false)
            setSuccess(true)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),5000)
            return subscriber
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
            setErrorMessageDisplay(true)
            setTimeout(() => setErrorMessageDisplay(false),5000)
        }
    }
    return { Subscribe,isLoading,success,successMessageDisplay,error,errorMessageDisplay}
        
}

//CREATE OFFER
export const useCreateOffer = () => {
    const { dispatch } = useOfferContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const [errorMessageDisplay,seterrorMessageDisplay] = useState(false)

    const CreateOffer = async (formData) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            const res = await userRequest.post(`/offer`,formData)
            dispatch({type:'CREATE_OFFER', payload: res.data})
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { CreateOffer,success,isLoading, setError, error,setIsLoading,errorMessageDisplay,seterrorMessageDisplay}
}

//DELETE OFFER
export const useDeleteOffer = () => {
    const { dispatch } = useOfferContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const DeleteOffer = async (id) => {
        try{
            setIsLoading(true)
            setError(null)
            const offer = await userRequest.delete(`/offer/${id}`)
            dispatch({type:'DELETE_OFFER', payload: offer.data})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { DeleteOffer, isLoading }
        
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

//UPDATE REVIEW
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

//review functions
export const useReviewFunction = () => {
    const { reviews } = useReviewContext()

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


//OPENAI GENERATE IMAGE
export const useGenerateImage = () => {
    const [isGenerateImgError, setgenerateImgError] = useState(null)
    const [isGenerateImgLoading, setGenerateImgLoading] = useState(null)
    const [isGenerateImgSuccess, setGenerateImgSuccess] = useState(null)

    const generateImg = async (imgDesc) => {
        try{
            setGenerateImgLoading(true)
            setGenerateImgSuccess(null)
            const res = await userRequest.post('/openai/generateImage',imgDesc)
            setGenerateImgLoading(false)
            setGenerateImgSuccess(true)
            setgenerateImgError(false)
            return res
            
        }catch(err){
            setGenerateImgLoading(false)
            setgenerateImgError(err.response.data)
        }
    }

    return { generateImg , isGenerateImgLoading , isGenerateImgSuccess, isGenerateImgError}
}
//OPENAI GENERATE TEXT
export const useGenerateText = () => {
    const [isGenerateTextError, setgenerateTextError] = useState(null)
    const [isGenerateTextLoading, setGenerateTextLoading] = useState(null)
    const [isGenerateTextSuccess, setGenerateTextSuccess] = useState(null)

    const generateText = async (textDesc) => {
        try{
            setGenerateTextLoading(true)
            setGenerateTextSuccess(null)
            const res = await userRequest.post('/openai/generateText',textDesc)
            setGenerateTextLoading(false)
            setGenerateTextSuccess(true)
            setgenerateTextError(false)
            return res
            
        }catch(err){
            setGenerateTextLoading(false)
            setgenerateTextError(err.response.data)
        }
    }

    return { generateText,isGenerateTextError,isGenerateTextLoading,isGenerateTextSuccess }
}


//CREATE BLOG
export const useCreateBlog = () => {
    const { dispatch } = useBlogContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const [successMessageDisplay,setSuccessMessageDisplay] = useState(true)
    const [errorMessageDisplay,setErrorMessageDisplay] = useState(false)

    const createBlog = async (form) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            const res = await userRequest.post('/blog',form)
            dispatch({type:'CREATE_BLOG', payload: res})
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            setSuccessMessageDisplay(true)
            setTimeout(() => setSuccessMessageDisplay(false),6000)
            //return res
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { createBlog,isLoading,setIsLoading,error,setError,
    success,setSuccess,successMessageDisplay,errorMessageDisplay,setErrorMessageDisplay }
}

//DELETE BLOG
export const useDeleteBlog = () => {
    const { dispatch } = useBlogContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const DeleteBlog = async (id) => {
        try{
            setIsLoading(true)
            setError(null)
            const blog = await userRequest.delete(`/blog/${id}`)
            dispatch({type:'DELETE_BLOG', payload: blog})
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { DeleteBlog }
        
}

//UPDATE BLOG
export const useUpdateBlog = () => {
    const { dispatch } = useBlogContext()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const UpdateBlog = async (id,blog) => {
        try{
            setIsLoading(true)
            setError(null)
            setSuccess(false)
            const updatedBlog = await userRequest.put(`/blog/${id}`,blog)
            dispatch({type:'UPDATE_BLOG', payload: updatedBlog})
            setIsLoading(false)
            setSuccess(true)
            setTimeout(() => setSuccess(null),4000)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }
    return { UpdateBlog,success, isLoading,error }
        
}

//CREATE CONTACT(message support)
export const useCreateContact = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)

    const createContact = async (form) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            await userRequest.post('/contact',form)
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { createContact,isLoading,error,success}
}

//DELETE CONTACT MESSAGE
export const useDeleteSupportRequest = () => {
    const { dispatch } = useRestContext()
    const [deleteSupportSuccess, setDeleteSupportSuccess] = useState(null)
    const [deleteSupportIsLoading, setDeleteSupportIsLoading] = useState(null)

    const DeleteSupportRequest = async (id) => {
        try{
            setDeleteSupportIsLoading(true)
            const supportRequest = await userRequest.delete(`/contact/${id}`)
            dispatch({type:'DELETE_SUPPORT-REQUEST', payload: supportRequest})
            setDeleteSupportIsLoading(false)
            setDeleteSupportSuccess(true)
        }catch(err){
            setDeleteSupportIsLoading(false)
            console.log(err.response.data)
        }
    }
    return { DeleteSupportRequest, deleteSupportIsLoading, deleteSupportSuccess }
        
}

//CREATE BUYPROPERTY REQUEST
export const useCreateBuyPropertyRequest = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)

    const createBuyPropertyRequest = async (form) => {
        try{
            setIsLoading(true)
            setSuccess(null)
            await userRequest.post('/buyProperty',form)
            setIsLoading(false)
            setSuccess(true)
            setError(false)
            
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }
    }

    return { createBuyPropertyRequest,isLoading,error,success }
}

//DELETE buyProperty Request
export const useDeleteBuyPropertyRequest = () => {
    const { dispatch } = useRestContext()
    const [deleteBuySuccess, setDeleteBuySuccess] = useState(null)
    const [deleteBuyIsLoading, setDeleteBuyIsLoading] = useState(null)

    const DeleteBuyPropertyRequest = async (id) => {
        try{
            setDeleteBuyIsLoading(true)
            const buyPropertyRequest = await userRequest.delete(`/buyProperty/${id}`)
            dispatch({type:'DELETE_BUYPROPERTY-REQUEST', payload: buyPropertyRequest})
            setDeleteBuyIsLoading(false)
            setDeleteBuySuccess(true)
        }catch(err){
            setDeleteBuyIsLoading(false)
            console.log(err.response.data)
        }
    }
    return { DeleteBuyPropertyRequest, deleteBuyIsLoading, deleteBuySuccess }
        
}

//CREATE SELL PROPERTY/LAND
export const useCreateSellProperty = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [errorMessageDisplay,seterrorMessageDisplay] = useState(false)

    const CreatePropertyForSale = async (property) => {
        try{
            const res = await userRequest.post("/sellProperty",property)
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreatePropertyForSale, success,isLoading, setError, error,setIsLoading,errorMessageDisplay,seterrorMessageDisplay}
}

//DELETE SELLProperty Request
export const useDeleteSellPropertyRequest = () => {
    const { dispatch } = useRestContext()
    const [deleteSellSuccess, setDeleteSellSuccess] = useState(null)
    const [deleteSellIsLoading, setDeleteSellIsLoading] = useState(null)

    const DeleteSellPropertyRequest = async (id) => {
        try{
            setDeleteSellIsLoading(true)
            const sellPropertyRequest = await userRequest.delete(`/sellProperty/${id}`)
            dispatch({type:'DELETE_SELLPROPERTY-REQUEST', payload: sellPropertyRequest})
            setDeleteSellIsLoading(false)
            setDeleteSellSuccess(true)
        }catch(err){
            setDeleteSellIsLoading(false)
            console.log(err.response.data)
        }
    }
    return { DeleteSellPropertyRequest, deleteSellIsLoading, deleteSellSuccess }
        
}

//CREATE HIREPAINTER REQUEST
export const useCreateHirePainterRequest = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [errorMessageDisplay,seterrorMessageDisplay] = useState(false)

    const CreateHirePainterRequest = async (hirePainterForm) => {
        try{
            setIsLoading(true)
            const res = await userRequest.post("/hirePainter",hirePainterForm)
            setIsLoading(false)
            setSuccess(true)
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreateHirePainterRequest, success,isLoading, setError, error,setIsLoading,errorMessageDisplay,seterrorMessageDisplay}
}

//DELETE HIREPAINTER Request
export const useDeleteHirePainterRequest = () => {
    const { dispatch } = useRestContext()
    const [deleteHireSuccess, setDeleteHireSuccess] = useState(null)
    const [deleteHireIsLoading, setDeleteHireIsLoading] = useState(null)

    const DeleteHirePainterRequest = async (id) => {
        try{
            setDeleteHireIsLoading(true)
            const painterRequest = await userRequest.delete(`/hirePainter/${id}`)
            dispatch({type:'DELETE_PAINTER-REQUEST', payload: painterRequest})
            setDeleteHireIsLoading(false)
            setDeleteHireSuccess(true)
        }catch(err){
            setDeleteHireIsLoading(false)
            console.log(err.response.data)
        }
    }
    return { DeleteHirePainterRequest, deleteHireIsLoading, deleteHireSuccess }
        
}

//SEND BULK MAIL TO SUBSCRIBERS
export const useSendBulkMail = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [errorMessageDisplay,seterrorMessageDisplay] = useState(false)

    const CreateSendBulk = async (form) => {
        try{
            setIsLoading(true)
            const res = await userRequest.post("/nodemailer/sendBulk",form)
            if(res.status === 200){
            setIsLoading(false)
            setSuccess(true)
            }
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreateSendBulk, success,isLoading, setError, error,setIsLoading,errorMessageDisplay,seterrorMessageDisplay}
}


//REPLY REQUEST MAIL
export const useSendRequestReply = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [errorMessageDisplay,seterrorMessageDisplay] = useState(false)

    const CreateRequestReply = async (form) => {
        try{
            setIsLoading(true)
            const res = await userRequest.post("/nodemailer/sendRequestReply",form)
            if(res.status === 200){
            setIsLoading(false)
            setSuccess(true)
            }
            return res
        }catch(err){
            setIsLoading(false)
            setError(err.response.data)
        }

    }
    return {CreateRequestReply, success, isLoading, setError, error,setIsLoading,errorMessageDisplay,seterrorMessageDisplay}
}

