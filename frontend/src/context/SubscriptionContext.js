import { createContext, useReducer} from 'react';

const SubscriptionContext = createContext()

const SubscriptionReducer = (state,action) => {
    switch(action.type){
        case 'SET_SUBSCRIBERS':
            return { subscribers: action.payload}
        // case 'UPDATE_USER':
        //     return { 
        //         users: {
        //             ...state.users,
        //             data: state.users.data.map((user) => (
        //                 user._id === action.payload.data._id 
        //                 ?
        //                 action.payload.data
        //                 : 
        //                 user
        //             ))
        //         }
        //      }
        // case 'DELETE_USER':
        //     return { users: {...state.users,data:state.users.data.filter((u) => u._id !== action.payload.data._id)} }
        default:
            return state
    }
}

const SubscriptionContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(SubscriptionReducer, {
        subscribers:null
    })


    console.log("SubcriptionContext state:", state)

    return (
        <SubscriptionContext.Provider value={{...state,dispatch}}>
            {children}
        </SubscriptionContext.Provider>
    )
}

export {SubscriptionContextProvider, SubscriptionContext}