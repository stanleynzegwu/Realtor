import { useContext } from "react";

import { PagesContext } from '../context/PagesContext'

export const usePagesContext = () => {
    const context = useContext(PagesContext)

    if(!context){
        throw Error('usePagesContext must be used inside of PagesContextProvider')
    }

    return context
}