import React from 'react'
import { motion } from 'framer-motion'

import { GiPostOffice } from 'react-icons/gi'
import logo from '../../assets/logos/stan.png'
import mobile from '../../assets/logos/mobile.png'
import email from '../../assets/logos/email.png'
import './Contact.scss'

const Contact = () => {
    return ( 
        <motion.footer className='contact' id='contact'>
            <div className='contact__header'>
                    <img src={logo} alt="logo" className='contact__logo'/>
                    <p className='contact__header-text contact-text-small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque saepe cum! Ut quia corporis, ipsa optio aperiam quo laudantium doloribus sint, expedita earum error exercitationem velit qui ipsum minus?</p>
            </div>

            <div className='contact__links'>
                <div className='heading'>
                    <p>Contact</p>
                </div>
                <div className='rest'>
                    <div className='footer-card'>
                        <img src={email} alt='email'/>
                        <a href='mailto:chukky@gmail.com' className='link p-text'>nzegwustanley@gmail.com</a>
                    </div>
                    <div className='footer-card'>           
                        <img src={mobile} alt='mobile'/>
                        <a href='tel: +234 (702) 600-3700' className='link p-text'>+234 (702) 637-3728</a>
                    </div>
                </div>
            </div>

            <div className='subscribe'>
                <div className='heading'>
                    <p>Subscribe to our news letter</p>
                </div>
                <div className='rest'>
                    <p>We send weekly property updates,offers and lots more. Subscribe to get direct update in your mail.</p>
                    <form action="" className='form'>
                        <input type="text" placeholder='Email Address'/>
                        <button>enter</button>
                    </form>
                </div>
            </div>
        </motion.footer>
     );
}
 
export default Contact;