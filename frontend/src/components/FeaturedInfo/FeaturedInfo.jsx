import { BiDownArrowAlt } from 'react-icons/bi'
import './FeaturedInfo.scss'
const FeaturedInfo = () => {
    return ( 
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <BiDownArrowAlt/></span>
                    <span className="featuredMoney"></span>
                </div>
            </div>
        </div>
     );
}
 
export default FeaturedInfo;