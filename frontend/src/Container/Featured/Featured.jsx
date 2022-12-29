import React from 'react'
import { Link } from 'react-router-dom'
import {FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'

import { FadeUpAnimation } from '../../components/UI/Animation/Animation'
import { Button } from '../../components'
import './Featured.scss'
import { usePropertyContext } from '../../Hooks/usePropertyContext'


// let data = [{
//     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
//     property:'Villa On Washington Avenue',location:'Mirpa City, Dhaka',price:'$20,000'
// },{
//     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
//     property:'Villa On Washington Avenue',location:'Mirpa City, Dhaka',price:'$20,000'
// }
// ]
function formatPrice(p){
    let position = 3
    return String(p).split('').reverse().map((l,index) => {
        if(index === position){
            position += 3
            return `${l},`
        }else{
            return l
        }
    }).reverse().join('')
}

const Featured = () => {
    const {properties} = usePropertyContext()
    const  featured = properties?.data.filter(({isFeatured}) => isFeatured === true).slice(0,2)
    console.log(featured)
    return ( 
        <section className='featured'>
            <FadeUpAnimation className='featured__p heading-text--sm'>properties</FadeUpAnimation>
            <FadeUpAnimation className='featured__header heading-text--lg'>Featured properties</FadeUpAnimation>
            <FadeUpAnimation className='featured__cardHolder'>
                {featured && featured.map(({_id,price,img,propertyType,location},index) => (
                    <div key={index}
                        className='featured_card'
                    >
                        <div className='card_text'>
                            <p className='card_text-price'>{`N${formatPrice(price)}`}</p>
                            <h2 className='card_text-property'>{propertyType}</h2>
                            <div className='property-location'>
                                <span className='icon'><FaMapMarkerAlt /></span>
                                <p className='property-location__text'>{location}</p>
                            </div>
                            <Link to={`/viewProperty/${_id}`}>
                                <div className='view'>
                                    <AiFillEye />
                                </div>
                            </Link>
                        </div>
                        <div className='card_img'>
                            <img src={img[0]} alt="property" />
                        </div>
                    </div>
                ))}
            </FadeUpAnimation>
            <Button val='see all'/>
        </section>
     );
}
 
export default Featured;