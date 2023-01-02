import { useLocation } from 'react-router-dom';

import './SelectedProperty.scss'
import { usePropertyContext } from '../../Hooks/usePropertyContext';

const SelectedProperty = () => {
    const { properties } = usePropertyContext()
    const { pathname } = useLocation()
    const selectedProperty = pathname.split('/').filter(word => word && word !== 'selectedProperty')

    let filteredProperty = properties.data.filter(({state,category}) => {
        let val = [state,category].map((a) => a.toLowerCase().trim())
        let concated = [...new Set([...val,...selectedProperty])]
        return val.length === concated.length
    })
        console.log(filteredProperty)

    return ( 
        <div className="selectedProperty">selectedproperty</div>
     );
}
 
export default SelectedProperty;