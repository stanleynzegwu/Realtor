import React from 'react'
import { Link } from "react-router-dom"
import { ImHome } from "react-icons/im";
import { motion } from 'framer-motion'

import CardHolder from '../../components/Cards/CardHolder/CardHolder'
import Card from '../../components/Cards/Card/Card'
import './About.scss'

const About = ({ setId }) => {

    return ( 
        <motion.section 
            whileInView={{ y: [100,50,0], opacity: [0, 0, 1]}}
            transition={{ duration: 0.5}}
            className='about'
            id='about'
            >
            <p className='about__text heading-text--sm'>WHAT WE DO</p>
            <h2 className='about__header heading-text--lg'>our main focus</h2>
            <CardHolder>
                {[{icon:<ImHome />,about:'Buy a Building',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
                {icon:<ImHome />,about:'Buy a Land',text:'lorem and we nnvhfhfhf hdnc  c dhd c dshsh  dbdhdhdhhd dhd can jdhdh jhdhd jdjdj bcvdhdhd'},
                {icon:<ImHome />,about:'Hire Painters',text:'lorem and we can jdhdh jhdhd jdjdj bcvdhdhd'}].map(({icon,about,text},index) => (
                    <Card key={index} >
                        <div className='card__icon'>{icon}</div>
                        <p className='card__about'>{about}</p>
                        <p className='card__text'>{text}</p>
                        <div className='btn card__button'><Link to='/about/:id'><button id={index+1} onClick={(e) => setId(Number(e.target.id))}>More</button></Link></div>
                    </Card>
                ))}
            </CardHolder>
        </motion.section>
     );
}
 
export default About;