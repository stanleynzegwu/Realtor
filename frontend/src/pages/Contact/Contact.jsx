import { useNavigate } from 'react-router-dom'
import { AiFillPhone } from 'react-icons/ai'
import { BiCurrentLocation } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

import contactUs from '../../assets/logos/contact_us.png'
import './Contact.scss'

const Contact = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    return ( 
        <div className="contact">
            <div className="contact_wrapper">
                <div className="contact_left">
                    <h1>Leave us a message</h1>
                    <form className="contact_leftForm">
                        <div className="contact_leftFormItem">
                            <label>Your name</label>
                            <input placeholder="Enter your Name" type="text" />
                        </div>
                        <div className="contact_leftFormItem">
                            <label>Email Address</label>
                            <input placeholder="Enter your Email Address" type="text" />
                        </div>
                        <div className="contact_leftFormItem">
                            <label>Mobile Number</label>
                            <input placeholder="Enter your Phone Number" type="text" />
                        </div>
                        <div className="contact_leftFormItem">
                            <label>Your Message</label>
                            <textarea placeholder="Enter your Meassage"
                                name="" id="" />
                        </div>
                        <button className='contactBtn'>Leave a meassage</button>
                    </form>
                </div>

                <div className="contact_right">
                    <div className="contact_right__item">
                        <img src={contactUs} alt="contactUs" />
                    </div>
                    <div className="contact_right__item">
                        <span><BiCurrentLocation/></span>
                        <p className="contact_Location">Asaba Delta State</p>
                    </div>
                    <div className="contact_right__item">
                        <span><AiFillPhone/></span>
                        <p className="contact_phone"> +234 816 0000 33</p>
                    </div>
                    <div className="contact_right__item">
                        <span><MdEmail/></span>
                        <p className="contact_phone"> realtorsupport@gmail.com</p>
                    </div>
                </div>
            </div>
            <button onClick={handleGoBack} className='backBtn'>Back</button>
        </div>
     );
}
 
export default Contact;