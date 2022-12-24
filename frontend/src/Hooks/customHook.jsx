import { useState } from "react"

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

