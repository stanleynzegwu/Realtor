import { createContext, useReducer, useEffect} from 'react';
import { userRequest } from '../RequestMethods';

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
        case 'DELETE_SUPPORT-REQUEST':
            return { ...state,supportRequests: state.supportRequests.filter(({_id}) => _id !== action.payload.data._id)}
        case 'DELETE_BUYPROPERTY-REQUEST':
            return { ...state,buyPropertyRequests: state.buyPropertyRequests.filter(({_id}) => _id !== action.payload.data._id)}
        case 'DELETE_SELLPROPERTY-REQUEST':
            return { ...state,sellPropertyRequests: state.sellPropertyRequests.filter(({_id}) => _id !== action.payload.data._id)}
        case 'DELETE_PAINTER-REQUEST':
            return { ...state,painterRequests: state.painterRequests.filter(({_id}) => _id !== action.payload.data._id)}
        default:
            return state
    }
}
const RestContextProvider = ({children}) => {
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