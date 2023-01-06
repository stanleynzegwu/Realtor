import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './FeaturedInfo.scss'
import HorizontalBar from '../HorizontalBar'
import { useReviewFunction } from '../../Hooks/useApiRequest';

const FeaturedInfo = () => {
    const { starNum, getPercentage, totalReviews } = useReviewFunction()
    return (
        <div className='featured'>
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
                  500: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                  884: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                  1030: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                }}
                scrollbar={false}
                navigation={false}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
              <SwiperSlide className="featuredItem">
                 <span className='reviewTextBold'>
                    Customer reviews <span className='reviewTextLight'>{`(${totalReviews()} reviews)`}</span>
                 </span>
                 <div className='barAllHolder'>
                    {
                      [{star:5,bgColor:'#48E6B4',percentage:`${getPercentage(5)}%`,totalStarNo:starNum(5)},
                        {star:4,bgColor:'#AED58A',percentage:`${getPercentage(4)}%`,totalStarNo:starNum(4)},
                        {star:3,bgColor:'#D6D678',percentage:`${getPercentage(3)}%`,totalStarNo:starNum(3)},
                        {star:2,bgColor:'#D6B878',percentage:`${getPercentage(2)}%`,totalStarNo:starNum(2)},
                        {star:1,bgColor:'#D69178',percentage:`${getPercentage(1)}%`,totalStarNo:starNum(1)},
                      ].map((rating,index) => (
                        <div className='barHolder' key={index}>
                          <span className='starRating'>{rating.star}</span>
                          <HorizontalBar bgColor={rating.bgColor} percentage={rating.percentage} />
                          <div className='barGroupLeft'>
                            <span className='starPercentage'>{rating.percentage}</span>
                            <span className='starNo'>{rating.totalStarNo}</span>
                          </div>
                        </div>
                      ))
                      
                    }
                 </div>
              </SwiperSlide>
              <SwiperSlide className="featuredItem">
                 <span className="featuredTitle">Revenue</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,415</span>
                     <span className="featuredMoneyRate">-11.4 <BiDownArrowAlt className='featuredIcon negative'/></span>
                 </div>
                 <span className='featuredSub'>Compared to last month</span>
             </SwiperSlide>
             <SwiperSlide className="featuredItem">
                 <span className="featuredTitle">Sales</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$4,415</span>
                     <span className="featuredMoneyRate">-1.4 <BiDownArrowAlt className='featuredIcon negative'/></span>
                 </div>
                 <span className='featuredSub'>Compared to last month</span>
             </SwiperSlide>
             <SwiperSlide className="featuredItem">
                 <span className="featuredTitle">Cost</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,225</span>
                     <span className="featuredMoneyRate">+11.4 <BiUpArrowAlt className='featuredIcon'/></span>
                 </div>
                 <span className='featuredSub'>Compared to last month</span>
             </SwiperSlide>
              </Swiper>
        </div>

    )
}
 
export default FeaturedInfo;