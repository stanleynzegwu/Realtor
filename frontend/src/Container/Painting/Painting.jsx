import painter from '../../assets/logos/painter1.png'
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'
import './Painting.scss'

const Painting = () => {
    return ( 
        <div className="painting">
            <FadeUpAnimation className='painting__p heading-text--sm'>painting</FadeUpAnimation>
            <FadeUpAnimation className='painting__header heading-text--lg'>We Offer Painting Services</FadeUpAnimation>
            <div className="painting__holder">
                <div className="paintingLeft">
                    <div className="paintingLeft_container">
                        <div className="paintingLeft_overlay"></div>
                        <img src={painter} alt="painter" className="paintingLeft_img"/>
                    </div>
                </div>
                <div className="paintingRight"></div>
            </div>
        </div>
     );
}
 
export default Painting;