import { createContext, useReducer, useEffect} from 'react';
import axios from 'axios';

import { useAuthContext } from '../Hooks/useAuthContext';
import { BASE_URL } from '../RequestMethods';
import { useRequestMethods } from '../Hooks/customHook'
const SubscriptionContext = createContext()


const SubscriptionReducer = (state,action) => {
    switch(action.type){
        case 'SET_SUBSCRIBERS':
            return { subscribers: action.payload}
        default:
            return state
    }
}
const SubscriptionContextProvider = ({children}) => {
    const { user } = useAuthContext()
    const { userRequest } = useRequestMethods()
    let token = user?.data.token
    console.log(token)
    const [state,dispatch] = useReducer(SubscriptionReducer, {
        subscribers:null
    })

    // const userRequest = axios.create({
    //     baseURL: BASE_URL,
    //     headers:{token:`Bearer ${'token'}`}
    // })
    useEffect(() => {
        const getMessages = async () => {
            try{
                const subscribers = await userRequest.get("/subScribe")
                console.log(subscribers.data)
                dispatch({type:'SET_SUBSCRIBERS', payload: subscribers.data})

                // const supportRequest = await userRequest.get("/contact")
                // console.log(supportRequest.data)

                // const painterRequest = await userRequest.get("/hirePainter")
                // console.log(painterRequest.data)

                // const buyPropertyRequest = await userRequest.get("/buyProperty")
                // console.log(buyPropertyRequest.data)

                // const sellProperty = await userRequest.get("/sellProperty")
                // console.log(sellProperty.data)
            }catch(err){
                console.log(err)
            }
        }
        user?.data.isAdmin && getMessages()
    },[user])
    console.log("SubcriptionContext state:", state)

    return (
        <SubscriptionContext.Provider value={{...state,dispatch}}>
            {children}
        </SubscriptionContext.Provider>
    )
}

export {SubscriptionContextProvider, SubscriptionContext}