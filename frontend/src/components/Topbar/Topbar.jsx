import { Link } from 'react-router-dom'
import { MdNotificationsNone } from 'react-icons/md'
import './Topbar.scss'
import {useAuthContext} from '../../Hooks/useAuthContext'

const Topbar = () => {
    const { user } = useAuthContext()
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
                    {user && <img src={user?.data.img ? user?.data.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className='topAvatar'/>}
                </div>
            </div>
        </div>
     );
}
 
export default Topbar;