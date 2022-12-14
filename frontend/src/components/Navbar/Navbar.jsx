import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiMenu,HiX} from 'react-icons/hi'
import {AiFillHome,AiFillPropertySafety} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FaBlog,FaUsers} from 'react-icons/fa'
import {GrContact} from 'react-icons/gr'
import {TbLogin , TbLogout} from 'react-icons/tb'

import Button  from '../Button/Button'
import logo from '../../assets/logos/stan.png'
import './Navbar.scss'
import {useAuthContext} from '../../Hooks/useAuthContext'
import { useLogout } from '../../Hooks/useApiRequest'


const Navbar= () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    // const user = {isAdmin:true}

    const [toggle, setToggle] = useState(false)
    return ( 
        <nav className='app__navbar '>
            
            <div className='app__navbar-logo'>
                <img className='img-logo' src={logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home','about','properties','blog','testimonial','contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='navbarImgHolder'>
                {user && <img src={user?.data.img ? user?.data.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar"  className='navbarUserImg'/>}
                <div className='btn__holder'>
                {
                    user ? 
                    <div className='btn__double'>
                        <button className='btnLogout' onClick={logout}><TbLogout />Logout</button>
                        {user?.data.isAdmin && <Link to="/adminDashboard/home"><button className='btn'>Dashboard</button></Link>}
                    </div>
                    :
                    <div className='btn__double'>
                        <Link to="/login"><button className='btn1'><TbLogin />Login</button></Link>
                        <Link to="signup"><button className='btn'>Sign up</button></Link>
                    </div>
                }
                </div>
            </div>
            
            <div className='app__navbar-menuHolder'>
            {user && <img src={user?.data.img ? user?.data.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt=""  className='navbarUserImg'/>}
                <div className='app__navbar-menu'>
                        <HiMenu onClick={() => setToggle(true)}/>

                        {toggle && (
                            <div
                                whileInView={{ x: [300, 0]}} /* meaning it"s going to take 300px */
                                transition={{ duration: 0.85, ease: 'easeOut' }}
                            >

                                <HiX onClick={() => setToggle(false)}/>
                                <ul>
                                {[[<AiFillHome />,'home'],[<FcAbout />,'about'],[<AiFillPropertySafety />,'properties'],
                                [<FaBlog />,'blog'],[<FaUsers />,'testimonial'],[<GrContact />,'contact']].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item[1]}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                                    {
                                        user ? 
                                        <li>
                                            <a href="">Logout</a> 
                                            {/* later change this anchor tag to button */}
                                        </li>
                                        :
                                        <>
                                            <Link to="/login">Login</Link>
                                            <Link to="/Signup">Signup</Link>
                                        </>
                                    }
                                </ul>
                                
                            </div>
                        )}
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;