import { createContext, useReducer, useEffect, useState} from 'react';
import { userRequest } from '../RequestMethods';

import { useAuthContext } from '../Hooks/useAuthContext';
const RestContext = createContext()


const RestReducer = (state,action) => {
    switch(action.type){
        case 'SET_SUBSCRIBERS':
            return { ...state,subscribers: action.payload}
        case 'SET_SUPPORT-REQUESTS':
            return { ...state,supportRequests: action.payload}
        case 'SET_PAINTER-REQUESTS':
            return { ...state,painterRequests: action.payload}
        case 'SET_BUYPROPERTY-REQUESTS':
            return { ...state,buyPropertyRequests: action.payload}
        case 'SET_SELLPROPERTY-REQUESTS':
            return { ...state,sellPropertyRequests: action.payload}
        default:
            return state
    }
}
const RestContextProvider = ({children}) => {
    const { user } = useAuthContext()
    const [state,dispatch] = useReducer(RestReducer, {
        subscribers:null,
        supportRequests:null,
        painterRequests:null,
        buyPropertyRequests:null,
        sellPropertyRequests:null
    })
// const [isLoading,setLoading] = useState(false)
// if(state.subscribers && state.supportRequests && state.painterRequests && state.buyPropertyRequests && state.sellPropertyRequests){
//     setLoading(true)
// }

    useEffect(() => {
        const getMessages = async () => {
            try{
                const subscribers = await userRequest.get("/subScribe")

                const supportRequest = await userRequest.get("/contact")

                const painterRequest = await userRequest.get("/hirePainter")

                const buyPropertyRequest = await userRequest.get("/buyProperty")
                
                const sellProperty = await userRequest.get("/sellProperty")

                dispatch({type:'SET_SUPPORT-REQUESTS', payload: supportRequest.data})
                dispatch({type:'SET_SUBSCRIBERS', payload: subscribers.data})
                dispatch({type:'SET_SELLPROPERTY-REQUESTS', payload: sellProperty.data})
                dispatch({type:'SET_BUYPROPERTY-REQUESTS', payload: buyPropertyRequest.data})
                dispatch({type:'SET_PAINTER-REQUESTS', payload: painterRequest.data})
            }catch(err){
                console.log(err)
            }
        }
        getMessages()
    },[])
    console.log("RestContext state:", state)

    return (
        <RestContext.Provider value={{...state,dispatch}}>
            {children}
        </RestContext.Provider>
    )
}

export {RestContextProvider, RestContext}