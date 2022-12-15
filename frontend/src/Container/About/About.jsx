import React from 'react'
import { Link } from "react-router-dom"
import { ImHome } from "react-icons/im";
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'

import CardHolder from '../../components/Cards/CardHolder/CardHolder'
import Card from '../../components/Cards/Card/Card'
import './About.scss'
//data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-mirror="true" data-aos-once="false" class="aos-init aos-animate" 
const About = () => {
    return ( 
        <section
            className='about'
            id='about'
            >
            <FadeUpAnimation className='about__text heading-text--sm'>WHAT WE DO</FadeUpAnimation>
            {/* <p className='about__text heading-text--sm'>WHAT WE DO</p> */}
            <FadeUpAnimation  className='about__header heading-text--lg'>our main focus</FadeUpAnimation>
            <CardHolder>
                {[{icon:<ImHome />,about:'Buy a Building',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd',id:'buildings'},
                {icon:<ImHome />,about:'Buy a Land',text:'lorem and we nnvhfhfhf hdnc  c dhd c dshsh  dbdhdhdhhd dhd can jdhdh jhdhd jdjdj bcvdhdhd',id:'lands'},
                {icon:<ImHome />,about:'Hire Painters',text:'lorem and we can jdhdh jhdhd jdjdj bcvdhdhd',id:'painters'}].map(({icon,about,text,id},index) => (
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