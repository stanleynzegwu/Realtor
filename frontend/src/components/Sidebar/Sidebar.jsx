import { MdLineStyle, MdTimeline } from 'react-icons/md'
import { FiUsers , FiMail , FiMessageSquare} from 'react-icons/fi'
import { GrBlog } from 'react-icons/gr'
import { MdProductionQuantityLimits, MdOutlineReviews, MdOutlineLocalOffer } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import { FadeDownAnimation, FadeLeftAnimation, FadeRightAnimation, FadeUpAnimation } from '../UI/Animation/Animation'

const Sidebar = () => {
    const [active,setActive] = useState('home')

    const handleClick = (e) => {
        setActive(e.target.id)
    }

    return ( 
        <div className="sidebar">
            <FadeUpAnimation className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/adminDashboard/home'>
                            <li id='home'
                                style={{backgroundColor:`${active === 'home' ? 'rgb(210, 206, 206)' : ''}`}}
                                onClick={ handleClick }
                                className='sidebarListItem'>
                                <MdLineStyle />Home
                            </li>
                        </Link>
                        <li id='analytics'
                            style={{backgroundColor:`${active === 'analytics' ? 'rgb(210, 206, 206)' : ''}`}}
                            onClick={ handleClick }
                            className='sidebarListItem'>
                            <MdTimeline />Analytics
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/adminDashboard/users'>
                            <li id='users'
                                style={{backgroundColor:`${active === 'users' ? 'rgb(210, 206, 206)' : ''}`}}
                                onClick={ handleClick }
                                className='sidebarListItem'>
                                <FiUsers />Users
                            </li>
                        </Link>
                        <Link to='/adminDashboard/reviewList'>
                            <li id='reviews'
                                style={{backgroundColor:`${active === 'reviews' ? 'rgb(210, 206, 206)' : ''}`}}
                                onClick={ handleClick }
                                className='sidebarListItem'>
                                <MdOutlineReviews />Reviews
                            </li>
                        </Link>
                        <Link to='/adminDashboard/properties'>
                            <li id='properties'
                                style={{backgroundColor:`${active === 'properties' ? 'rgb(210, 206, 206)' : ''}`}}
                                onClick={ handleClick } 
                                className='sidebarListItem'>
                                <MdProductionQuantityLimits />Properties
                            </li>
                        </Link>
                        <Link to='/adminDashboard/blog'>
                            <li id='blogs'
                                style={{backgroundColor:`${active === 'blogs' ? 'rgb(210, 206, 206)' : ''}`}}
                                onClick={ handleClick } 
                                className='sidebarListItem'>
                                <GrBlog />Blog
                            </li>
                        </Link>
                        <Link to='/adminDashboard/offerList'>
                            <li id='offers'
                                style={{backgroundColor:`${active === 'offers' ? 'rgb(210, 206, 206)' : ''}`}}
                                onClick={ handleClick } 
                                className='sidebarListItem'>
                                <MdOutlineLocalOffer />Offer
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li id='mail'
                            style={{backgroundColor:`${active === 'mail' ? 'rgb(210, 206, 206)' : ''}`}}
                            onClick={ handleClick }
                            className='sidebarListItem'>
                            <FiMail />Mail
                        </li>
                        <li id='messages'
                            style={{backgroundColor:`${active === 'messages' ? 'rgb(210, 206, 206)' : ''}`}}
                            onClick={ handleClick }
                            className='sidebarListItem'>
                            <FiMessageSquare />Messages
                        </li>
                    </ul>
                </div>
            </FadeUpAnimation>
        </div>
     );
}
 
export default Sidebar;