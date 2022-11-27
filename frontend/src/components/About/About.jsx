import React from 'react'
import { ImHome } from "react-icons/im";
import './About.scss'

const About = () => {
    return ( 
        <section className='about'>
            <p className='about__text'>WHAT WE DO</p>
            <h2 className='about__header'>our main focus</h2>
            <div className='about__card-holder'>
                {[{icon:<ImHome />,about:'Buy a Building',text:'lorem and we can jdhdh jhdhd jdjdj bcvdhdhd'},
                {icon:<ImHome />,about:'Buy a Land',text:'lorem and we can jdhdh jhdhd jdjdj bcvdhdhd'},
                {icon:<ImHome />,about:'Sell a land',text:'lorem and we can jdhdh jhdhd jdjdj bcvdhdhd'}].map(({icon,about,text},index) => (
                    <div className='card' key={index}>
                        <div className='card__icon'>{icon}</div>
                        <p className='card__about'>{about}</p>
                        <p>{text}</p>
                        <div className='btn'><button>More</button></div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default About;