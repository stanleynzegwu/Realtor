import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

import './SingleAbout.scss'
import { ScrollToTop } from '../../Hooks/customHook'
import building1 from '../../assets/logos/building1.jpg'
import building2 from '../../assets/logos/building2.jpg'
import building3 from '../../assets/logos/building3.jpg'

const SingleAbout = () => {
    ScrollToTop()
    console.log(useParams().id)
    console.log(useLocation())
    const { pathname } = useLocation()
    let id = pathname.split('/')[2]
    console.log(id)
   let about = [
        {aboutId:'buildings',header:'Buy Beautiful Buildings Across The Country',subHeading:`You're Gonna Love It`,
        img:{photo1:building1,photo2:building2,photo3:building3},describe:`At [Your Company Name], we are proud to offer a wide variety of high-quality, nicely situated landed properties across the country. Whether you're looking for a sprawling estate or a cozy cottage, we have something to suit every taste and budget.

        One of the key factors that sets our properties apart is their prime location. We carefully select properties that are situated in desirable areas, with easy access to transportation, amenities, and other important services. This ensures that our properties will retain their value over time and provide a comfortable and convenient living or working environment.
        
        Another important aspect of our properties is their condition. All of our properties are thoroughly inspected and maintained to ensure that they meet the highest standards of quality. We take pride in offering properties that are move-in ready and require minimal repairs or renovations.
        
        In addition, our landed properties are available at different price ranges, which means that we have something for everyone. Whether you're a first-time homebuyer or a seasoned investor, we have properties that will meet your needs and budget.
        
        At [Your Company Name], we are committed to providing our clients with the best possible experience when it comes to purchasing landed properties. We work closely with our clients to understand their needs and preferences, and we are dedicated to helping them find the perfect property that suits their needs and budget.
        
        So if you're in the market for a high-quality, nicely situated landed property, look no further than [Your Company Name]. We have a wide variety of properties available, and our team of experts is ready to help you find the perfect one for you.`},
        {aboutId:'lands',header:'Buy Nice Situated Lands Across The Country',subHeading:`You're Gonna Love It`,
        img:{photo1:building1,photo2:building2,photo3:building3},describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'},
        {aboutId:'painters',header:'Hire Painters That Will Give Your Building A Glow',subHeading:`You're Gonna Love It`,
        img:{photo1:building1,photo2:building2,photo3:building3},describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'}
    ]
    
    const filtered = about.filter(({aboutId}) => aboutId === id)
    let [obj] = filtered
    let {header,subHeading,img,describe} = obj
    let {photo1,photo2,photo3} = img

    return ( 
        id && <div className='container'>
            <h1>{header}</h1>
            <div className='sub-container'>
                <div className='sub-container__text'>
                    <h2>{subHeading}</h2>
                    <p>{describe}</p>
                </div>
                <div className='sub-container__img'>
                    <img className='photo photo1' src={photo1} alt="building" loading='lazy'/>
                    <img className='photo photo2' src={photo2} alt="building" loading='lazy'/>
                    <img className='photo photo3' src={photo3} alt="building" loading='lazy'/>
                </div>
            </div>
        </div>
     );
}
 
export default SingleAbout;