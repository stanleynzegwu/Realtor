import React from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa'

import './Latest.scss'
import CardHolder from '../../components/Cards/CardHolder/CardHolder'
import Card from '../../components/Cards/Card/Card'

let arr = [{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
property:'Duplex apartment',location:'Mirpa City, Dhaka',price:'$140,000'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
property:'Duplex apartment',location:'Mirpa City, Dhaka',price:'$140,000'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
property:'Duplex apartment',location:'Mirpa City, Dhaka',price:'$140,000'}
]

const Latest = () => {
    return ( 
        <div className='latest'>
            <p className='latest__p'>our property</p>
            <h1 className='latest__header'>latest property</h1>
            <CardHolder>
            {arr.map(({img,property,location,price},index) => (
                <Card key={index}>
                    <div>
                        <div className='card__imgHolder'>
                            <img src={img} alt="property" />
                        </div>

                        <div className='card__restHolder'>
                            <div className='card__restHolder-sub'>
                                <h2 className='property-type'>{property}</h2>
                                <div className='property-location'>
                                    <span className='icon'><FaMapMarkerAlt /></span>
                                    <p className='property-location__text'>{location}</p>
                                </div>
                            </div>
                            <div className='property-price__Holder'>
                                <span className='property-price'>{price}</span>
                            </div>
                        </div>
                        <div className='card__footer'>
                            <div className='card__more'>
                                <span>More about</span>
                            </div>
                            <div className='card__view'>
                                <span>View</span>
                            </div>
                        </div>
                    </div>
                    <div className='onSale'>
                        <p>FOR SALE</p>
                    </div>
                    
                </Card>
            ))}
            </CardHolder>
        </div>
     );
}
 
export default Latest;