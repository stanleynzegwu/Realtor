import { createContext, useReducer} from 'react';

const UserContext = createContext()

const UserReducer = (state,action) => {
    switch(action.type){
        case 'SET_USERS':
            return { users: action.payload}
        case 'CREATE_USER':
            return { users: [action.payload,...state.users] }
        default:
            return state
    }
}

const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(UserReducer, {
        users:null
    })


    console.log("UserContext state:", state)

    return (
        <UserContext.Provider value={{...state,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}