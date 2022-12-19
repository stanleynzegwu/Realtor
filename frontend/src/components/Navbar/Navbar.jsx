import React from 'react'
import {HiMenu,HiX} from 'react-icons/hi'
import { motion } from 'framer-motion'
import logo from '../../assets/logos/stan.png'
import './Navbar.scss'
import { useState } from 'react'

const Navbar= () => {
    const user = false
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
            <div>
                {
                    user ? 
                    <div>
                        <button>Logout</button>
                    </div>
                    :
                    <div>
                        <button>Sign in</button>
                        <button>Sign up</button>
                    </div>
                }
            </div>

            <div className='app__navbar-menu'>
                    <HiMenu onClick={() => setToggle(true)}/>

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0]}} /* meaning it"s going to take 300px */
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            
                            <HiX onClick={() => setToggle(false)}/>
                            <ul>
                            {['home','about','properties','blog','testimonial','contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                            </ul>
                            
                        </motion.div>
                    )}
            </div>
        </nav>
     );
}
 
export default Navbar;