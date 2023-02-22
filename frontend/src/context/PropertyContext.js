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
                properties: {...state.properties,data:[...state.properties.data,action.payload.data]} 
            }
        case 'UPDATE_PROPERTY':
            return { 
                properties: {
                    ...state.properties,
                    data: state.properties.data.map((property) => (
                        property._id === action.payload.data._id 
                        ?
                        action.payload.data
                        : 
                        property
                    ))
                }
             }
        case 'DELETE_PROPERTY':
            return { properties: {...state.properties,data:state.properties.data.filter((u) => u._id !== action.payload.data._id)} }
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

    return (
        <PropertyContext.Provider value={{...state,dispatch}}>
            {children}
        </PropertyContext.Provider>
    )
}

export {PropertyContextProvider, PropertyContext}