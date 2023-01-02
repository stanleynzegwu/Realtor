import { useState } from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import './UserReview.scss'

const UserReview = () => {
    const [hoverIndex,setHoverIndex] = useState(0)
    const [reviewIndex,setReviewIndex] = useState(0)

    const shouldStarBeFilled = (val) => {
        return (hoverIndex >= val) || (reviewIndex >= val)
    }

    return ( 
        <div className="userReview">
            <div className="reviewLeft"></div>
            <div className="reviewRight">
                <h1>Your review makes us serve you better</h1>
                <div className='starMainContainer'>
                    <p>How was your experience ?</p>
                    <ul className="starContainer">
                        {[1,2,3,4,5].map((val,index) => (
                            <li 
                                onMouseEnter={() => setHoverIndex(val)}
                                onMouseLeave={() => setHoverIndex(0)}
                                onClick={() => setReviewIndex(val)}
                                key={index}
                            >
                                {shouldStarBeFilled(val) ? <AiFillStar /> : <AiOutlineStar />}
                            </li>
                        ))}
                    </ul>
                </div>
                        
                <form className='review-form'>
                    <div className="reviewInput">
                        <textarea name="review" id="" cols="20" rows="6" placeholder='Write your review'/>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default UserReview;