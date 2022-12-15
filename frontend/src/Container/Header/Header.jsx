import React, {useEffect} from 'react'
import { FaHouzz , FaMapMarkerAlt } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

import background from '../../assets/logos/realtor-background.jpg'
import image from '../../assets/logos/land-man.png'
import './Header.scss'
//<div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-mirror="true" data-aos-once="false" class="aos-init aos-animate"><div class="flex flex-col justify-around items-center space-y-4"><h4 class="font-heading font-semibold text-lg text-gray uppercase">Get started</h4><p class="font-heading font-bold text-lg text-center md:text-justify text-blue"> Use carfaxt in three easy steps</p></div></div>
const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
            <main className="header" id='home' style={{objectFit: 'cover',background: `url('https://img.freepik.com/free-photo/digital-increasing-bar-graph-with-businessman-hand-overlay_53876-97640.jpg?w=1480&t=st=1671078510~exp=1671079110~hmac=2ad1f2217dc1ce3cb427c79c15803c85e6670edd7d26dc194cc1a2fa61377326')`}}>
                <div className='header__main'>
                    <div className='header__main-text'>
                        <p className='big-s'>Find Your Best <br/>Smart <span>Real <br/> Estate</span></p>
                        <p className='small-s'>Find Your Best Smart <br/> <span>Real Estate</span></p>
                    </div>
                    <div className='header__main-img'>
                        <img src={image} alt="land" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-once="false" class="aos-init aos-animate" className='header__search'>
                    <form className='header__search-holder'>
                        <div data-aos-offset="0" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-mirror="false" data-aos-once="false" class="aos-init aos-animate" className='search__location search-util'>
                            <div className='form__label label'>
                                <label className="custom-label label"htmlFor='amountOfQuestions'><FaMapMarkerAlt /></label>
                            </div>
                            <div className='form__select'>
                                <select
                                >
                                    <option value='Location'>Location</option>
                                    <option value='Anambra'>Anambra</option>
                                    <option value='Delta'>Delta</option>
                                </select>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-mirror="false" data-aos-once="false" class="aos-init aos-animate" className='search__type search-util'>
                            <div className='form__label'>
                                <label className="custom-label label"htmlFor='amountOfQuestions'><FaHouzz /></label>
                            </div>
                            <div className='form__select'>
                                <select
                                >
                                    <option value='Property Type'>Property Type</option>
                                    <option value='Buildings'>Buildings</option>
                                    <option value='Lands'>Lands</option>
                                </select>
                            </div>

                        </div>
                        <div class="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="false" data-aos-once="false" className='search__button search-util'>
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                {/* <div className="overlay" style={{background: `url(${image})`}}/> */}
            </main>
     );
}
 
export default Header;