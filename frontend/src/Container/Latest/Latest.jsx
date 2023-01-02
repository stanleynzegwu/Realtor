import React from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'

import { Button } from '../../components'
import './Latest.scss'
import CardHolder from '../../components/Cards/CardHolder/CardHolder'
import Card from '../../components/Cards/Card/Card'
import { usePropertyContext } from '../../Hooks/usePropertyContext'
import { formatPrice } from '../../utilityFunctions'


const Latest = () => {
    const {properties} = usePropertyContext()
    const latestProperties = properties?.data.slice(0,3)
    return ( 
        <div className='latest'
            id='properties'>
            <FadeUpAnimation className='latest__FadeUpAnimation heading-text--sm'>our properties</FadeUpAnimation>
            <FadeUpAnimation className='latest__header heading-text--lg'>latest properties</FadeUpAnimation>
            <CardHolder>
            {latestProperties && latestProperties.map(({img,propertyType,location,price},index) => (
                <Card key={index}>
                    <div>
                        <div className='card__imgHolder'>
                            <img src={img[0]} alt="property" />
                        </div>

                        <div>
                            <div className='card__restHolder'>
                                <div className='card__restHolder-sub'>
                                    <h2 className='property-type'>{propertyType}</h2>
                                    <div className='property-location'>
                                        <span className='icon'><FaMapMarkerAlt /></span>
                                        <p className='property-location__text'>{location}</p>
                                    </div>
                                </div>
                                <div className='property-price__Holder'>
                                    <span className='property-price'>{`N${formatPrice(price)}`}</span>
                                </div>
                            </div>
                            <div className='card__footer'>
                                <div className='card__more'>
                                    <span>More about</span>
                                </div>
                                <div className='card__view'>
                                    <span>View</span>
                                    <span><AiFillEye /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='onSale'>
                        <p>FOR SALE</p>
                    </div>
                    
                </Card>
            ))}
            </CardHolder>
            
            <Button val='see all'/>
        </div>
     );
}
 
export default Latest;