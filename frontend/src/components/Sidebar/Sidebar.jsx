import { MdLineStyle, MdTimeline } from 'react-icons/md'
import { FiUsers , FiMail , FiMessageSquare} from 'react-icons/fi'
import { MdProductionQuantityLimits, MdReviews } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/adminDashboard/home'>
                            <li className='sidebarListItem active'>
                                <MdLineStyle />Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <MdTimeline />Analytics
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/adminDashboard/users'>
                            <li className='sidebarListItem'>
                                <FiUsers />Users
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <MdReviews />Reviews
                        </li>
                        <Link to='/adminDashboard/properties'>
                            <li className='sidebarListItem'>
                                <MdProductionQuantityLimits />Properties
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <FiMail />Mail
                        </li>
                        <li className='sidebarListItem'>
                            <FiMessageSquare />Messages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;