import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Testimonial.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const arr = [
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'David Lee',
email:'julian@gmail.com',star:5,testimony:'One of the best real estate companies you could find out there. They are so professional'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Brendan Eich',
email:'julian@gmail.com',star:5,testimony:'I had the best time of my life ,when i went to checkout a land- it was like a tour and a guide assigned,Lol.'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Thomas Tubee',
email:'julian@gmail.com',star:4,testimony:'One of the best real estate companies you could find out there. They are so professional'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Lionel Messi',
email:'julian@gmail.com',star:5,testimony:'One of the best real estate companies you could find out there. They are so professional'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Joe Biden',
email:'vallu@gmail.com',star:4,testimony:'One of the best real estate companies you could find out there. They are so professional'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Valentine Nwankwo',
email:'julian@gmail.com',star:3,testimony:'One of the best real estate companies you could find out there. They are so professional'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Ngozi Iweala',
email:'kula678@gmail.com',star:5,testimony:'One of the best real estate companies you could find out there. They are so professional'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',name:'Yvone Okoro Emerald',
email:'turak90@gmail.com',star:4,testimony:'One of the best real estate companies you could find out there. They are so professional'}
]

const Testimonial = () => {
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
        spaceBetween={40}
        //centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                {arr.map(({img,name,email,star,testimony},index) => (
                    <SwiperSlide className='testimonial-card' key={index + 1}>
                        <div className='client__img'>
                            <img src={img} alt="client" />
                        </div>
                        <p className='client__name'>{name}</p>
                        <p className='client__email'>{`${email.split('@')[0]}@`}</p>
                        <div className='client__rating'>
                            <span>{Array(star).fill(<AiFillStar />)}</span>
                        </div>
                        <p className='client__text'>{testimony}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
     );
}
 
export default Testimonial;