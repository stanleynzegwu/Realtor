import { MdLineStyle, MdTimeline } from 'react-icons/md'
import { FiUsers , FiMail , FiMessageSquare} from 'react-icons/fi'
import { MdProductionQuantityLimits, MdReviews } from 'react-icons/md'
import './Sidebar.scss'

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem active'>
                            <MdLineStyle />Home
                        </li>
                        <li className='sidebarListItem'>
                            <MdTimeline />Analytics
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <FiUsers />Users
                        </li>
                        <li className='sidebarListItem'>
                            <MdReviews />Reviews
                        </li>
                        <li className='sidebarListItem'>
                            <MdProductionQuantityLimits />Products
                        </li>
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