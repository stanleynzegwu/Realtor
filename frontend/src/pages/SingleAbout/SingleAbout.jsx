import { useRef } from 'react'
import { useParams,useLocation, Link } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { GiClick } from 'react-icons/gi'

import './SingleAbout.scss'
import { ScrollToTop, useHandleGoBack } from '../../Hooks/customHook'
import building1 from '../../assets/logos/building1.jpg'
import building2 from '../../assets/logos/building2.jpg'
import building3 from '../../assets/logos/building3.jpg'
import { TypingText } from '../../components'

const SingleAbout = () => {
    ScrollToTop()
    const handleGoBack = useHandleGoBack()
    const scrollHere = useRef(null)
    const { pathname } = useLocation()
    let id = pathname.split('/')[2]

    const scrollToElement = () => {
        scrollHere.current.scrollIntoView({ behavior: 'smooth' })
    }
   let about = [
        {whatWeDo:'BUY',aboutId:'buy',header:'Buy Beautiful Nice Situauted Landed Properties',subHeading:`Buy landed Properties & Lands`,
        img:{photo1:building1,photo2:building2,photo3:building3},intro:`Buying landed properties such as land and buildings can be a great investment for both personal living and financial gain. 

        Landed properties are typically more expensive than other types of real estate, but they can provide a stable source of income and appreciation over time. 

        When considering buying landed properties, it is important to research the local market, consider the potential for future development, and understand the associated costs. 

        Additionally, it is important to ensure that all legal documents are in order before making any purchase. 
        
        With careful planning and research, buying landed properties can be a rewarding experience.`,
         more:'click the icon to to see all properties',url: '/selectedProperty/allProperties',
        describe:`At [Your Company Name], we are proud to offer a wide variety of high-quality, nicely situated landed properties across the country. Whether you're looking for a sprawling estate or a cozy cottage, we have something to suit every taste and budget.

        One of the key factors that sets our properties apart is their prime location. We carefully select properties that are situated in desirable areas, with easy access to transportation, amenities, and other important services. This ensures that our properties will retain their value over time and provide a comfortable and convenient living or working environment.
        
        Another important aspect of our properties is their condition. All of our properties are thoroughly inspected and maintained to ensure that they meet the highest standards of quality. We take pride in offering properties that are move-in ready and require minimal repairs or renovations.
        
        In addition, our landed properties are available at different price ranges, which means that we have something for everyone. Whether you're a first-time homebuyer or a seasoned investor, we have properties that will meet your needs and budget.
        
        At [Your Company Name], we are committed to providing our clients with the best possible experience when it comes to purchasing landed properties. We work closely with our clients to understand their needs and preferences, and we are dedicated to helping them find the perfect property that suits their needs and budget.
        
        So if you're in the market for a high-quality, nicely situated landed property, look no further than [Your Company Name]. We have a wide variety of properties available, and our team of experts is ready to help you find the perfect one for you.`},
        {whatWeDo:'SELL',aboutId:'sell',header:`Sell Your Landed Properties And Get Money For It's Value`,subHeading:`sell to us`,
        img:{photo1:building1,photo2:building2,photo3:building3},intro:`Buying landed properties such as land and buildings can be a great investment for both personal living and financial gain. 
        Landed properties are typically more expensive than other types of real estate, but they can provide a stable source of income and appreciation over time. 
        When considering buying landed properties, it is important to research the local market, consider the potential for future development, and understand the associated costs. 
        Additionally, it is important to ensure that all legal documents are in order before making any purchase. 
        With careful planning and research, buying landed properties can be a rewarding experience.`,
        more:'click the icon to fill the form',url: '/sellPropertyForm',
        describe:`At [Your Company Name], we understand that owning a landed property or a land can be a valuable asset, but it may also come with its own set of challenges. Whether you're looking to downsize, upgrade, or simply need to sell your property or land quickly, we're here to help.

        One of the key services we offer at [Your Company Name] is the ability to purchase landed properties and lands from our clients. We specialize in buying properties and lands in prime locations, with easy access to transportation, amenities, and other important services. This ensures that the properties and lands we purchase will retain their value over time and provide a comfortable and convenient living or working environment for our future buyers.
        
        Our team is experienced in handling all aspects of the buying process, from initial property or land evaluation to closing the sale. We make the process as easy and stress-free as possible for our clients by handling all the paperwork and negotiations. We also offer competitive prices for your property or land and can close the deal in a timely manner.
        
        Another important aspect of our service is that we purchase properties and lands in any condition, whether it's move-in ready or requires repairs. We understand that not everyone has the time or resources to make repairs before selling their property or land, that's why we are ready to purchase it as it is.
        
        At [Your Company Name], we are committed to providing our clients with the best possible experience when it comes to selling their landed properties or lands. We understand that every client's situation is unique, and we work closely with them to understand their needs and preferences. Our goal is to make the selling process as easy and stress-free as possible, while also providing fair market value for their property or land.`},
        {whatWeDo:'HIRE PAINTERS',aboutId:'hire',header:`Hire Experienced Painters That Will Give Your Building A Glow`,subHeading:`hire experienced painters`,
        img:{photo1:building1,photo2:building2,photo3:building3},intro:`Buying landed properties such as land and buildings can be a great investment for both personal living and financial gain. 
        Landed properties are typically more expensive than other types of real estate, but they can provide a stable source of income and appreciation over time. 
        When considering buying landed properties, it is important to research the local market, consider the potential for future development, and understand the associated costs. 
        Additionally, it is important to ensure that all legal documents are in order before making any purchase. 
        With careful planning and research, buying landed properties can be a rewarding experience.`,
        more:'click the icon to fill the form',url: '/hirePaintersForm',
        describe:`At our company, we offer building painting services that are second to none. Our experienced team of painters specialize in both interior and exterior painting, and are dedicated to providing excellent customer service. 
        
        We take pride in our attention to detail and commitment to customer satisfaction, so you can trust us to deliver a quality paint job. 
        
        Our team of experienced painters will work with you to achieve the perfect look for your home. We use meticulous techniques to ensure a long-lasting finish, and only the highest quality paints and materials for our projects. 
        
        We understand that your building is one of your biggest investments, so we strive to provide the best possible service at an affordable price. With our building painting services, you can be sure that your home will look beautiful for years to come.`}
    ]
    
    const filtered = about.filter(({aboutId}) => aboutId === id)
    let [obj] = filtered
    let {whatWeDo,header,subHeading,img,intro,more,url,describe} = obj
    let {photo1,photo2,photo3} = img

    return (
        id &&
        <div className='container'>
            <div className="parent">
                <div className="child">
                    <h2>{whatWeDo}</h2>
                    <TypingText text={header} intervalDuration={40} className='type_about'/>
                    <span onClick={scrollToElement}><AiOutlineArrowDown /></span>
                </div>
            </div>
            <div ref={scrollHere} className="container__sub">
                <div className='sub-container'>
                    <div className='sub-container__text'>
                        <h2 className='sub-container__bold'>{subHeading}</h2>
                        <p>{describe}</p>
                    </div>
                    <div className='sub-container__img'>
                        <img className='photo photo1' src={photo1} alt="building" loading='lazy'/>
                        <img className='photo photo2' src={photo2} alt="building" loading='lazy'/>
                        <img className='photo photo3' src={photo3} alt="building" loading='lazy'/>
                    </div>
                </div>
                <p className='sub-container2'>{more} <Link to={url}><span><GiClick /></span></Link></p>
                <button onClick={handleGoBack}>Back</button>
            </div>
        </div>
     );
}
 
export default SingleAbout;