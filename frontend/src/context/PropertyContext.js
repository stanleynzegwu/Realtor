import { createContext, useReducer, useEffect } from 'react';
import { publicRequest } from '../RequestMethods';

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

  useEffect(() => {
    const getAllProperties = async () => {
        try{
            const properties = await publicRequest.get("/property")
            dispatch({type:'SET_PROPERTY', payload: properties})
        }catch(err){
            console.log(err)
        }
    }
    getAllProperties()
  },[])  
  console.log("PropertyContext state:", state.properties)
    return (
        <PropertyContext.Provider value={{...state,dispatch}}>
            {children}
        </PropertyContext.Provider>
    )
}

export {PropertyContextProvider, PropertyContext}