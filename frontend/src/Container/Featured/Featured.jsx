import React from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'

import { Button } from '../../components'
import './Featured.scss'


let data = [{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
    property:'Villa On Washington Avenue',location:'Mirpa City, Dhaka',price:'$20,000'
},{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
    property:'Villa On Washington Avenue',location:'Mirpa City, Dhaka',price:'$20,000'
}
]

const Featured = () => {
    return ( 
        <section className='featured'>
            <p className='featured__p heading-text--sm'>properties</p>
            <h1 className='featured__header heading-text--lg'>Featured properties</h1>
            <div className='featured__cardHolder'>
                {data.map(({img,property,location,price},index) => (
                    <div key={index}
                        className='featured_card'
                    >
                        <div className='card_text'>
                            <p className='card_text-price'>{price}</p>
                            <h2 className='card_text-property'>{property}</h2>
                            <div className='property-location'>
                                <span className='icon'><FaMapMarkerAlt /></span>
                                <p className='property-location__text'>{location}</p>
                            </div>
                            <div className='view'>
                                <AiFillEye />
                            </div>
                        </div>
                        <div className='card_img'>
                            <img src={img} alt="property" />
                        </div>
                    </div>
                ))}
            </div>
            <Button />
        </section>
     );
}
 
export default Featured;