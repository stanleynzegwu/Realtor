import { useContext } from "react";

import { SubscriptionContext } from '../context/SubscriptionContext'

export const useSubscriptionContext = () => {
    const context = useContext(SubscriptionContext)

    if(!context){
        throw Error('useSubscriptionContext must be used inside of UserSubscriptionProvider')
    }

    return context
}