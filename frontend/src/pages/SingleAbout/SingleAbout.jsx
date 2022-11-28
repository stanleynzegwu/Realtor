import React from 'react'
import './SingleAbout.scss'

const SingleAbout = ({ id }) => {
   let about = [
        {aboutId:1,name:'buy a building',describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'},
        {aboutId:2,name:'buy a Land',describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'},
        {aboutId:3,name:'Hire painters',describe:'lorem bbdbbd hdhhd bdbbdbbdbbdbdb'}
    ]
    
    const filtered = about.filter(({aboutId}) => aboutId === id)
    let [fil] = filtered

    return ( 
        id && <div>
            <h3>{fil.name}</h3>
            <p>{fil.describe}</p>
        </div>
     );
}
 
export default SingleAbout;