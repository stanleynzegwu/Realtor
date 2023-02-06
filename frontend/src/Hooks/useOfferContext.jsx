import { useContext } from "react";

import { OfferContext } from '../context/OfferContext'

export const useOfferContext = () => {
    const context = useContext(OfferContext)

    if(!context){
        throw Error('useOfferContext must be used inside of OfferContextProvider')
    }

    return context
}