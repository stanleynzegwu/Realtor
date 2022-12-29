import { useParams,useLocation } from 'react-router-dom'

import './ViewProperty.scss'

const ViewProperty = () => {
    const { id } = useParams()
    console.log(id)
    return ( 
        <div className="viewProperty">view</div>
     );
}
 
export default ViewProperty;