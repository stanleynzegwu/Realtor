import { useContext } from "react";

import { PropertyContext } from '../context/PropertyContext'

export const usePropertyContext = () => {
    const context = useContext(PropertyContext)

    if(!context){
        throw Error('usePropertyContext must be used inside of PropertyContextProvider')
    }

    return context
}