import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

export const UseId = () => {
    const [id,setId] = useState(0)

    const changeId = (idd) => setId(idd)

    return { id,changeId }
}
 

export const SetPasswordVisibility = () => {
    const [isVisible, setVisible] = useState(false)

    const changeVisibility = () =>  setVisible(prev => !prev)
    return {isVisible, changeVisibility}
}

export const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}

export const useHandleGoBack = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1);
    }

    return handleGoBack
}

