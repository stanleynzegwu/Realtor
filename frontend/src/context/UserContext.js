import { createContext, useReducer} from 'react';

const UserContext = createContext()

const UserReducer = (state,action) => {
    switch(action.type){
        case 'SET_USERS':
            return { users: action.payload}
        case 'CREATE_USER':
            console.log(state.users)
            return { users: {...state?.users,data:[...state?.users?.data,action.payload?.data]} }
        case 'UPDATE_USER':
            return { 
                users: {
                    ...state.users,
                    data: state.users.data.map((user) => (
                        user._id === action.payload.data._id 
                        ?
                        action.payload.data
                        : 
                        user
                    ))
                }
             }
        case 'DELETE_USER':
            return { users: {...state.users,data:state.users.data.filter((u) => u._id !== action.payload.data._id)} }
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