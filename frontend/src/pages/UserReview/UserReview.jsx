import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

import './UserReview.scss'
import illustration from '../../assets/logos/reviewIllustration.svg'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useUserReview } from '../../Hooks/useApiRequest' 

const UserReview = () => {
    const { user } = useAuthContext()
    const userId = user?.data._id
    const { CreateReview, error, setError, success } = useUserReview()
    const [hoverIndex,setHoverIndex] = useState(0)
    const [reviewStarIndex,setReviewStarIndex] = useState(0)
    const [review,setReview] = useState("")

    const shouldStarBeFilled = (val) => {
        return (hoverIndex >= val) || (reviewStarIndex >= val)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        if( (reviewStarIndex === 0) || (!review) ){
            console.log('both star rating & text area should be filled')
            setError("Both star rating & textarea should be filled")
            return
        }
        const form = {star:reviewStarIndex,review}
        await CreateReview(userId,form)
    }

    return (
        success
        ?
        <div className='reviewSuccess'>
            <div className='reviewSuccess__emojiHolder'>
                <span className="thumbs-up">
                  👍
                </span>
            </div>
            <div className='reviewSuccess__messageHolder'>
                <h3>
                    Thank You
                </h3>
                <p>
                    Your Feedback was successfully submitted
                </p>
            </div>
            <Link to='/'>
                <span>Back to home</span>
            </Link>
        </div>
        :
        <div className="userReview">
            <div className="reviewLeft">
                <img src={illustration} alt="review-illustarion" className='review_img'/>
            </div>
            <div className="reviewRight">
                <h1>Your review makes us serve you better</h1>
                <div className='starMainContainer'>
                    <p>How was your experience ?</p>
                    <ul className="starContainer">
                        {[1,2,3,4,5].map((val,index) => (
                            <li 
                                onMouseEnter={() => setHoverIndex(val)}
                                onMouseLeave={() => setHoverIndex(0)}
                                onClick={() => setReviewStarIndex(val)}
                                key={index}
                            >
                                {shouldStarBeFilled(val) ? <AiFillStar /> : <AiOutlineStar />}
                            </li>
                        ))}
                    </ul>
                </div>
                        
                <form className='review-form' onSubmit={handleSubmit}>
                    <div className="reviewInput">
                        <textarea
                            name="review"
                            value={review}
                            id=""
                            cols="20"
                            rows="6"
                            maxLength={200}
                            placeholder='Write your review'
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </div>
                    <span
                    className={review.length > 170 ? 'yellow' : ''}
                    >{`${review.length}/200`}
                    </span>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
     );
}
 
export default UserReview;