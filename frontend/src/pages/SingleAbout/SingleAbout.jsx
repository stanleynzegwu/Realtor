import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

import './SingleAbout.scss'
import building1 from '../../assets/logos/building1.jpg'
import building2 from '../../assets/logos/building2.jpg'
import building3 from '../../assets/logos/building3.jpg'

const SingleAbout = () => {
    console.log(useParams().id)
    console.log(useLocation())
    const { pathname } = useLocation()
    let id = pathname.split('/')[2]
    console.log(id)
   let about = [
        {aboutId:'buildings',header:'Buy Beautiful Buildings Across The Country',subHeading:`You're Gonna Love It`,
        img:{photo1:building1,photo2:building2,photo3:building3},describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb howre ggdhhdh ttteggegege ggsgggsggs hghwgwyw heuyu3uuiiqwq bbcnbnhhdyd bbbeeyeeuehe bxbxbxbxvxvx xvxvxvxvxvxv hhhhf hfhfh dadada ryry'},
        {aboutId:'lands',header:'Buy Nice Situated Lands Across The Country',subHeading:`You're Gonna Love It`,
        img:{photo1:building1,photo2:building2,photo3:building3},describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'},
        {aboutId:'painters',header:'Hire Painters That Will Give Your Building A Glow',subHeading:`You're Gonna Love It`,
        img:{photo1:building1,photo2:building2,photo3:building3},describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'}
    ]
    
    const filtered = about.filter(({aboutId}) => aboutId === id)
    let [obj] = filtered
    let {header,subHeading,img,describe} = obj
    let {photo1,photo2,photo3} = img

    return ( 
        id && <div className='container'>
            <h1>{header}</h1>
            <div className='sub-container'>
                <div className='sub-container__text'>
                    <h2>{subHeading}</h2>
                    <p>{describe}</p>
                </div>
                <div className='sub-container__img'>
                    <img className='photo photo1' src={photo1} alt="building" loading='lazy'/>
                    <img className='photo photo2' src={photo2} alt="building" loading='lazy'/>
                    <img className='photo photo3' src={photo3} alt="building" loading='lazy'/>
                </div>
            </div>
        </div>
     );
}
 
export default SingleAbout;