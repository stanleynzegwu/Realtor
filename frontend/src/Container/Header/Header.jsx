import React from 'react'
import { FaHouzz , FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

import image from '../../assets/logos/land-man.png'
import './Header.scss'

const Header = () => {
    return (
            <main className="header">
                <div className='header__main'>
                    <div className='header__main-text'>
                        <p className='big-s'>Find Your Best <br/>Smart <span>Real <br/> Estate</span></p>
                        <p className='small-s'>Find Your Best Smart <br/> <span>Real Estate</span></p>
                    </div>
                    <div className='header__main-img'>
                        <img src={image} alt="land" />
                    </div>
                </div>

                <div className='header__search'>
                    <form className='header__search-holder'>
                        <div className='search__location search-util'>
                            <div className='form__label'>
                                <label className="custom-label"htmlFor='amountOfQuestions'><FaMapMarkerAlt /></label>
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

                        <div className='search__type search-util'>
                        <div className='form__label'>
                                <label className="custom-label"htmlFor='amountOfQuestions'><FaHouzz /></label>
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
                        <div className='search__button search-util'>
                            <button>Search</button>
                        </div>
                    </form>
                </div>
            </main>
     );
}
 
export default Header;