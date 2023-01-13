import React from 'react'
import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { FadeUpAnimation } from '../../components/UI/Animation/Animation'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { useBlogContext } from '../../Hooks/useBlogContext'
import './Blog.scss'

const Blog = () => {
    const {blogs} = useBlogContext()
    const allBlogs = blogs?.data
    console.log(allBlogs)
    return (
        <section className='blog' id='blog'>
            <FadeUpAnimation className='blog__p heading-text--sm'>blog</FadeUpAnimation>
            <FadeUpAnimation className='blog__header heading-text--lg'>our blog</FadeUpAnimation>

            <FadeUpAnimation>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
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
                {allBlogs && allBlogs.map(({_id,img,title,createdAt,desc},index) => (
                        <SwiperSlide className='blog-card' key={_id} >
                            <div className='card-img'>
                                <img src={img} alt="blog-pix" />
                            </div>
                            <div className='card-text'>
                                <h1 className='heading'>{title}</h1>
                                <p className='date'>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</p>
                                <p className='text'>{`${desc.trim().slice(0,100)}...`}</p>
                                <Link to={`/viewBlog/${_id}`}>
                                  <span className='span'>READ MORE &rarr;</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
              </Swiper>
              </FadeUpAnimation>
        </section>
     );
}
 
export default Blog;