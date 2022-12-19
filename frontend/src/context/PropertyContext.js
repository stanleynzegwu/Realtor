import { createContext, useReducer } from 'react';

const PropertyContext = createContext()

const PropertyReducer = (state,action) => {
    switch(action.type){
        case 'SET_PROPERTY':
            return {
                properties: action.payload
            }
        case 'CREATE_PROPERTY':
            return {
                properties: [action.payload,...state.properties]
            }
        default:
            return state
    }
}

const PropertyContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(PropertyReducer, {
        properties:null
    })

    return (
        <PropertyContext.Provider value={{...state,dispatch}}>
            {children}
        </PropertyContext.Provider>
    )
}

export {PropertyContextProvider, PropertyContext}