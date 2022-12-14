import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
//import { AiOutlineArrowLeft , AiOutlineArrowRight} from "react-icons/ai"
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import './Blog.scss'

let arr = [
    {id:1,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:3, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:6, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:7, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:8, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{id:9, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'}
]


const Blog = () => {

    return (
        <motion.section 
            whileInView={{ y: [100,50,0], opacity: [0, 0, 1]}}
            transition={{ duration: 0.5}}
            className='blog'
            id='blog'
        >
            <p className='blog__p heading-text--sm'>blog</p>
            <h1 className='blog__header heading-text--lg'>our blog</h1>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  583: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                  884: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  1030: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                }}
                scrollbar={false}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                {arr.map(({id,img,heading,date,text},index) => (
                        <SwiperSlide className='blog-card' key={index} >
                            <div className='card-img'>
                                <img src={img} alt="blog-pix" />
                            </div>
                            <div className='card-text'>
                                <h1 className='heading'>{heading}</h1>
                                <p className='date'>{date}</p>
                                <p className='text'>{text}</p>
                                <span className='span'>READ MORE &rarr;</span>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide className='blog-card'></SwiperSlide> */}
              </Swiper>
        </motion.section>
     );
}
 
export default Blog;