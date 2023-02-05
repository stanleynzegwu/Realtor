import { Link,useLocation } from 'react-router-dom';

import { Footer } from '../../Container'
import './SelectedProperty.scss'
import { ScrollToTop, useHandleGoBack } from '../../Hooks/customHook'
import { usePropertyContext } from '../../Hooks/usePropertyContext';

const SelectedProperty = () => {
    ScrollToTop()
    const handleGoBack = useHandleGoBack()
    const { properties } = usePropertyContext()
    const { pathname } = useLocation()

    let showProperty
    
    const selectedPath = pathname.split('/').filter(word => word && word !== 'selectedProperty')

    showProperty = selectedPath[0] === 'isFeatured' ? properties.data.filter(({isFeatured}) => isFeatured) :
    selectedPath[0] === 'allProperties' ? properties.data :
    properties.data.filter(({state,category}) => {
        let val = [state,category].map((a) => a.toLowerCase().trim())
        let concated = [...new Set([...val,...selectedPath])]
        return val.length === concated.length
    })

    return ( 
        <div className="selectedProperty">
            <div className='allProperty'>
                    <h1 className="allProperty__header">
                        Property
                    </h1>
                    <div className="allProperty__mainContainer">
                        {showProperty && showProperty.map(({_id,category,img,desc,location,propertyType},index) => (
                            <div key={index} className="allProperty__container">
                                <img src={img[0]} alt="property" className="allProperty__img" />
                                <span className="allProperty__category">{category}</span>
                                <div>
                                    <h2 className="allProperty__subHeader">{propertyType}</h2>
                                    <span>{location}</span>
                                </div>
                                <p className="allProperty_desc">{`${desc.slice(0,501)}`}</p>
                                <Link to={`/viewProperty/${_id}`}>
                                    <span className='allProperty_read'>View Property &rarr;</span>
                                </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <button onClick={handleGoBack}>Back</button>
                <Footer />
        </div>
     );
}
 
export default SelectedProperty;