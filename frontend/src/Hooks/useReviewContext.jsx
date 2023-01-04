import { useContext } from "react";

import { ReviewContext } from '../context/ReviewContext'

export const useReviewContext = () => {
    const context = useContext(ReviewContext)

    if(!context){
        throw Error('useReviewContext must be used inside of ReviewContextProvider')
    }

    return context
}