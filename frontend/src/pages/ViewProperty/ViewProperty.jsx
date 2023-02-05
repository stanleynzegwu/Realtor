import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { Footer } from '../../Container'
import { usePropertyContext } from '../../Hooks/usePropertyContext';
import './ViewProperty.scss'
import { ScrollToTop, useHandleGoBack } from '../../Hooks/customHook'
import { formatPrice } from '../../utilityFunctions';

const ViewProperty = () => {
    ScrollToTop()
    const handleGoBack = useHandleGoBack()
    const [toggle, setToggle] = useState(false)
    const { properties } = usePropertyContext()
    const { id } = useParams()
    const property = properties?.data.find(({_id}) => id === _id)
    
    return ( 
        <>
        <div className='viewProperty'>
            <div className='singleProperty'>
                <div className='singleProperty_imgHolder'>
                    {
                        property.img.map((img,index) => (
                            <img key={index} src={img} alt="property" className="singleProperty__img" />
                        ))
                    }
                </div>
                <div className='singleProperty_about'>
                    <span className="singleProperty_id">
                        <span className='span_about'>Property ID - </span>
                        {property._id}
                    </span>
                    <span className="singleProperty_desc">
                        <span className='span_about'>Property Description - </span>
                        {property.desc}
                    </span>
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
                <div className='singleProperty_position'>
                    <p className='singleProperty_interest'>Interested in this {property.propertyType} ? click <span onClick={() => setToggle(true)}>here</span></p>
                    {
                        toggle &&
                        <div className='singleProperty_buy'>
                            <div className='singleProperty_buyHolder'>
                                <p>If you have a genuine interest in this {property.propertyType} and may consider purchasing it, please press the green button to fill out the form.
                                     If not, press the red button to cancel</p>
                                <div className='btnWrapper'>
                                    <Link to={`/buyProperty/${property._id}`}><button className='btnSend'>Next</button></Link>
                                    <button onClick={() => setToggle(false)} className='btnCancel'>Cancel</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <button className='btnBack' onClick={handleGoBack}>Back</button>
        </div>
        <Footer />
        </>
     );
}
 
export default ViewProperty;