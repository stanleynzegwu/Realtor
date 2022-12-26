import React, {useEffect} from 'react'
import { FaHouzz , FaMapMarkerAlt } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

import background from '../../assets/logos/realtor-background.jpg'
import image from '../../assets/logos/land-man.png'
import './Header.scss'
import {usePropertyContext} from '../../Hooks/usePropertyContext'
import { userRequest } from '../../RequestMethods';

const location = ['Delta','Anambra','Lagos','Abuja','Kaduna'].sort()

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    //   const {properties,dispatch} = usePropertyContext()
    //   console.log(properties)
    //   useEffect(() => {
    //     const fetchProperties = async () => {
    //         const res = await fetch('/api/property')
    //         const json = await res.json()

    //         if(res.ok){
    //             dispatch({type:"SET_PROPERTY", payload: json})
    //         }
            
    //     } 
    //     fetchProperties()
    //   },[])
    
    //using axios
      const {properties,dispatch} = usePropertyContext()
      console.log(properties)
      useEffect(() => {
        const fetchProperties = async () => {
            try{
                const res = await userRequest.get("/property")
                dispatch({type:"SET_PROPERTY", payload: res})
            }catch(err){
                console.log(err)
            }
            
        } 
        fetchProperties()
      },[])

    return (
            <main className="header" id='home'>
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
                                    {location.map((state,index) => (
                                        <option value={state} key={index}>{state}</option>
                                    ))}
                                    {/* <option value='Anambra'>Anambra</option>
                                    <option value='Delta'>Delta</option> */}
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