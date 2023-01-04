import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaHouzz , FaMapMarkerAlt } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

//import background from '../../assets/logos/realtor-background.jpg'
import image from '../../assets/logos/land-man.png'
import './Header.scss'
import { usePropertyContext } from '../../Hooks/usePropertyContext';

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const [form,setForm] = useState({location:"", category:""})
      const { properties } = usePropertyContext()

      //Get list of properties and extract the state,propertyType for our location values
      const allStates = [...new Set(properties?.data.map(({state}) => state.toLowerCase()))].sort()
      //const listPropertyType = [...new Set(properties?.data.map(({propertyType}) => propertyType.toLowerCase()))].sort()

      function handleChange(e){
        const {name,value} = e.target

        setForm(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
      }
console.log(form)
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
                                <label className="custom-label label"htmlFor='location'><FaMapMarkerAlt /></label>
                            </div>
                            <div className='form__select'>
                                <select
                                    name="location"
                                    id="location"
                                    value={form.location}
                                    onChange={handleChange}
                                >   
                                    <option value='' disabled>Location</option>
                                    {allStates.map((state,index) => (
                                        <option value={state} key={index}>{state}</option>
                                    ))}
                                    {/* <option value='Anambra'>Anambra</option>
                                    <option value='Delta'>Delta</option> */}
                                </select>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-mirror="false" data-aos-once="false" class="aos-init aos-animate" className='search__type search-util'>
                            <div className='form__label'>
                                <label className="custom-label label"htmlFor='property Type'><FaHouzz /></label>
                            </div>
                            <div className='form__select'>
                                <select
                                    name="category"
                                    id="category"
                                    value={form.category}
                                    onChange={handleChange}
                                >
                                    <option value='' disabled>Category</option>
                                    {/* {listPropertyType.map((propertyType,index) => (
                                        <option value={propertyType} key={index}>{propertyType}</option>
                                    ))} */}
                                    <option value='building'>Building</option>
                                    <option value='land'>Land</option>
                                </select>
                            </div>

                        </div>
                        <div class="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="false" data-aos-once="false" className='search__button search-util'>
                            <Link to={
                                `/selectedProperty/${form.location}/${form.category}`}
                            >
                                <button type='button'>Search</button>
                            </Link>
                        </div>
                    </form>
                </div>
                {/* <div className="overlay" style={{background: `url(${image})`}}/> */}
            </main>
     );
}
 
export default Header;