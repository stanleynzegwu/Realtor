import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Testimonial.scss'
import { useReviewContext } from '../../Hooks/useReviewContext'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
    const { reviews } = useReviewContext()
    const latestReviews = reviews?.data.filter(review => review.isFavorite).slice(0,7)
    return ( 
        <section className='testimonial'
            id='testimonial'>
            <FadeUpAnimation className='testimonial__p heading-text--sm'>our Testimonial</FadeUpAnimation>
            <FadeUpAnimation className='testimonial__header heading-text--lg'>clients testimonials</FadeUpAnimation>
            <Swiper
              loop
              slidesPerView={1}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  //slidesPerGroup: 1,
                },
                700: {
                  slidesPerView: 2,
                  //slidesPerGroup: 1,
                },
                991: {
                  slidesPerView: 3,
                  //slidesPerGroup: 2,
                }
              }}
              spaceBetween={20}
              //centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
                {latestReviews && latestReviews.map(({img,username,useremail,star,review},index) => (
                    <SwiperSlide className='testimonial-card' key={index + 1}>
                        <div className='client__img'>
                            <img src={img} alt="client" />
                        </div>
                        <p className='client__name'>{username}</p>
                        <p className='client__email'>{`${useremail.split('@')[0]}@`}</p>
                        <div className='client__rating'>
                            <span>{Array(star).fill(<AiFillStar />)}</span>
                        </div>
                        <p className='client__text'>{review}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
     );
}
 
export default Testimonial;