import { Link } from 'react-router-dom'
import { MdNotificationsNone } from 'react-icons/md'
import './Topbar.scss'
const Topbar = () => {
    return ( 
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className="topLeft">
                    <Link to='/'><span className='logo'>stannz</span></Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <MdNotificationsNone />
                        <span className='topIconBag'>2</span>
                    </div>
                    <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className='topAvatar'/>
                </div>
            </div>
        </div>
     );
}
 
export default Topbar;