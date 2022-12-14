import { useState } from "react"

const UseId = () => {
    const [id,setId] = useState(0)

    const changeId = (idd) => setId(idd)

    return { id,changeId }
}
 
export default UseId;

