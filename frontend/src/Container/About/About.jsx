import React from 'react'
import { Link } from "react-router-dom"
import { ImHome } from "react-icons/im";
import { MdSell } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'

import CardHolder from '../../components/Cards/CardHolder/CardHolder'
import Card from '../../components/Cards/Card/Card'
import './About.scss'

const About = () => {
    return ( 
        <section
            className='about'
            id='about'
            >
            <FadeUpAnimation className='about__text heading-text--sm'>WHAT WE DO</FadeUpAnimation>
            <FadeUpAnimation  className='about__header heading-text--lg'>our main focus</FadeUpAnimation>
            <CardHolder>
                {[{icon:<ImHome />,about:'Buy Property',text:`We are proud to offer a wide variety of high-quality,
                nicely situated landed properties & lands across the country`,id:'buy'},
                {icon:<MdSell />,about:'Sell Property',text:`Whether you're looking to downsize, upgrade, 
                or simply need to sell your property or land quickly, we're here to help.`,id:'sell'},
                {icon:<AiFillFormatPainter />,about:'Hire Painters',text:`Our experienced team of painters specialize in both interior and exterior painting, 
                and are dedicated to providing excellent customer service`,id:'hire'}].map(({icon,about,text,id},index) => (
                    <Card key={index} >
                        <div className='card__icon'>{icon}</div>
                        <p className='card__about'>{about}</p>
                        <p className='card__text'>{text}</p>
                        <div className='btn card__button'><Link to={`/about/${id}`}><button>More</button></Link></div>
                    </Card>
                ))}
            </CardHolder>
        </section>
     );
}
 
export default About;