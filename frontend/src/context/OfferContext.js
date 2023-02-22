import { createContext, useReducer, useEffect } from 'react';
import { publicRequest } from '../RequestMethods';

const OfferContext = createContext()

const OfferReducer = (state,action) => {
    switch(action.type){
        case 'SET_OFFER':
            return {
                offers: action.payload
            }
        case 'CREATE_OFFER':
            return {
                offers: [...state.offers,action.payload]
            }
        case 'DELETE_OFFER':
            return { offers: state.offers.filter(({_id}) => action.payload._id !== _id) }
        default:
            return state
    }
}

const OfferContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(OfferReducer, {
        offers:null
    })

  useEffect(() => {
    const getAllOffers = async () => {
        try{
            const offers = await publicRequest.get("/offer")
            dispatch({type:'SET_OFFER', payload: offers.data})
        }catch(err){
            console.log(err)
        }
    }
    getAllOffers()
  },[])  

    return (
        <OfferContext.Provider value={{...state,dispatch}}>
            {children}
        </OfferContext.Provider>
    )
}

export {OfferContextProvider, OfferContext}