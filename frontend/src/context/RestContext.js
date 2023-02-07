import { createContext, useReducer, useEffect} from 'react';
import { userRequest } from '../RequestMethods';

import { useAuthContext } from '../Hooks/useAuthContext';
const RestContext = createContext()


const RestReducer = (state,action) => {
    switch(action.type){
        case 'SET_SUBSCRIBERS':
            return { subscribers: action.payload}
        case 'SET_SUPPORT-REQUESTS':
            return { supportRequests: action.payload}
        case 'SET_PAINTER-REQUESTS':
            return { painterRequests: action.payload}
        case 'SET_BUYPROPERTY-REQUESTS':
            return { buyPropertyRequests: action.payload}
        case 'SET_SELLPROPERTY-REQUESTS':
            return { sellPropertyRequests: action.payload}
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


    useEffect(() => {
        const getMessages = async () => {
            try{
                const subscribers = await userRequest.get("/subScribe")
                dispatch({type:'SET_SUBSCRIBERS', payload: subscribers.data})

                const supportRequest = await userRequest.get("/contact")
                dispatch({type:'SET_SUPPORT-REQUESTS', payload: supportRequest.data})

                const painterRequest = await userRequest.get("/hirePainter")
                dispatch({type:'SET_PAINTER-REQUESTS', payload: painterRequest.data})

                const buyPropertyRequest = await userRequest.get("/buyProperty")
                dispatch({type:'SET_BUYPROPERTY-REQUESTS', payload: buyPropertyRequest.data})
                

                const sellProperty = await userRequest.get("/sellProperty")
                dispatch({type:'SET_SELLPROPERTY-REQUESTS', payload: sellProperty.data})
            }catch(err){
                console.log(err)
            }
        }
        user?.data.isAdmin && getMessages()
    },[user])
    console.log("RestContext state:", state)

    return (
        <RestContext.Provider value={{...state,dispatch}}>
            {children}
        </RestContext.Provider>
    )
}

export {RestContextProvider, RestContext}