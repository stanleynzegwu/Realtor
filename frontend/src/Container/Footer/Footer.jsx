import { useState } from 'react'
import { Link }  from 'react-router-dom'
import { BsInstagram,BsFacebook,BsLinkedin,BsTwitter } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

import './Footer.scss'
import { FadeUpAnimation,FadeDownAnimation } from '../../components/UI/Animation/Animation'
import { useSubscription } from '../../Hooks/useApiRequest'
import { TypingText } from '../../components'

const Footer = () => {
    const { Subscribe,isLoading,success,successMessageDisplay } = useSubscription()
    const [formData,setFormData] = useState({email:""})
    const [subscriber,setSubscriber] = useState(null)

    async function handleSubmit(e){
        e.preventDefault()
        const subscriber = await Subscribe(formData)
        setSubscriber(subscriber?.data.email)
        setFormData({email:""})
    }

    return ( 
        <footer className='footer' id='contact'>
            <div className='main-wrapper'>
                <FadeDownAnimation className="footer_handle wrapper">
                    <div className="logo">
                        <h3 className='caption'>LOGO</h3>
                        <p className='astract-col'>Find your best smart real estate</p>
                        <div className="icons">
                            <BsFacebook />
                            <BsInstagram />
                            <BsLinkedin />
                            <BsTwitter />
                        </div>
                    </div>
                </FadeDownAnimation>

                <FadeDownAnimation className="footer_about wrapper">
                    <h3 className='caption'>About</h3>
                    <p className='quick-links astract-col'>Contact</p>
                    <p className='quick-links astract-col'>Team</p>
                    <p className='quick-links astract-col'>Career</p>
                    <Link to='/viewBlog/allBlog'>
                        <p className='quick-links astract-col'>Blogs</p>
                    </Link>
                </FadeDownAnimation>
                <FadeUpAnimation className="footer_help wrapper">
                    <h3 className='caption'>Help & Support</h3>
                    <Link to='/userReview'>
                        <p className='quick-links astract-col'>Review</p>
                    </Link>
                    <Link to='/contact'>
                        <p className='quick-links astract-col'>Contact us</p>
                    </Link>
                    <p className='quick-links astract-col'>Book</p>
                </FadeUpAnimation>
                <FadeUpAnimation className="footer_newsletter wrapper">
                    <h3 className='caption'>Subscribe to our Newsletter</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='emailInputHolder'>
                            <span><MdEmail /></span>
                            <input type="email"
                                placeholder='Enter your Email Address'
                                onChange={(e) => setFormData({[e.target.name]:e.target.value})}
                                value={formData.email}
                                name='email'
                            />
                        </div>
                        <button disabled={isLoading}>Subscribe</button>
                        {
                            success 
                            &&
                            successMessageDisplay
                            &&
                            <TypingText 
                                text={`${subscriber} subscribed succesfully`}
                                intervalDuration={30}
                                className='success'
                            /> 
                        }
                    </form>
                </FadeUpAnimation>
            </div>
            <div className='copyright'>
                <p className='astract-col'>Copyright <BiCopyright /> Realtor 2022-2023</p>
            </div>
        </footer>
     );
}
 
export default Footer;