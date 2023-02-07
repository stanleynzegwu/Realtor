import { useContext } from "react";

import { RestContext } from '../context/RestContext'

export const useRestContext = () => {
    const context = useContext(RestContext)

    if(!context){
        throw Error('useRestContext must be used inside of UserRestProvider')
    }

    return context
}