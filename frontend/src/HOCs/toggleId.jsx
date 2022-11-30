import { useState } from "react"

function Toggler(props) {
    const [id,setId] = useState(0)
    
    
        const Component = props.component
        return (
            <Component idd={id} setAboutId={setId} {...props} />
        )
}

export function toggleId(component) {
    return function(props) {
        return (
            <Toggler component={component} {...props}/>
        )
    }
}

