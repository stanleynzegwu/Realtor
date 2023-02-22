import { createContext, useReducer, useEffect } from 'react';
import { publicRequest } from '../RequestMethods';

const ReviewContext = createContext()

const ReviewReducer = (state,action) => {
    switch(action.type){
        case 'SET_REVIEW':
            return {
                reviews: action.payload
            }
        case 'CREATE_REVIEW':
            return {
                reviews: {...state.reviews,data:[...state.reviews.data,action.payload.data]} 
            }
        case 'UPDATE_REVIEW':
            return { 
                reviews: {
                    ...state.reviews,
                    data: state.reviews.data.map((review) => (
                        review._id === action.payload.data._id 
                        ?
                        action.payload.data
                        : 
                        review
                    ))
                }
             }
        case 'DELETE_REVIEW':
            return { reviews: {...state.reviews,data:state.reviews.data.filter((u) => u._id !== action.payload.data._id)} }
        default:
            return state
    }
}

const ReviewContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(ReviewReducer, {
        reviews:null
    })

  useEffect(() => {
    const getAllReviews = async () => {
        try{
            const reviews = await publicRequest.get("/review")
            dispatch({type:'SET_REVIEW', payload: reviews})
        }catch(err){
            console.log(err)
        }
    }
    getAllReviews()
  },[])  

    return (
        <ReviewContext.Provider value={{...state,dispatch}}>
            {children}
        </ReviewContext.Provider>
    )
}

export {ReviewContextProvider, ReviewContext}