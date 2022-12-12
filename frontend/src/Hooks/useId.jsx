import { useState } from "react"

const UseId = () => {
    const [id,setId] = useState(0)

    const changeId = (e) => setId(e)

    return { id,changeId }
}
 
export default UseId;

