import { useParams,useNavigate } from 'react-router-dom'
import { usePropertyContext } from '../../Hooks/usePropertyContext';

import './ViewProperty.scss'
import { formatPrice } from '../../utilityFunctions';

const ViewProperty = () => {
    const { properties } = usePropertyContext()
    const navigate = useNavigate()
    const { id } = useParams()
    const property = properties?.data.find(({_id}) => id === _id)
    
    const handleGoBack = () => {
        navigate(-1);
    }
    return ( 
        <div className="viewProperty">
            <div className='singleProperty'>
                <div className='singleProperty_imgHolder'>
                    {
                        property.img.map((img,index) => (
                            <img key={index} src={img} alt="property" className="singleProperty__img" />
                        ))
                    }
                </div>
                <div className='singleProperty_about'>
                    <p className="singleProperty_desc">
                        <span className='span_about'>Property Description - </span>
                        {property.desc}
                    </p>
                    <span className="singleProperty_category">
                        <span className='span_about'>Property Type - </span>
                        {property.propertyType}
                    </span>
                    <span className="singleProperty_location">
                        <span className='span_about'>Property Location - </span>
                        {property.location}
                    </span>
                    <span className="singleProperty_Price">
                        <span className='span_about'>Property Price - </span>
                        {`N${formatPrice(property.price)}`}
                    </span>
                </div>
                
            </div>
            <button onClick={handleGoBack}>Back</button>
        </div>
     );
}
 
export default ViewProperty;