import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './FeaturedInfo.scss'
const FeaturedInfo = () => {
    // return ( 
    //     <div className='featured'>
    //         <div className="featuredItem">
    //             <span className="featuredTitle">Revenue</span>
    //             <div className="featuredMoneyContainer">
    //                 <span className="featuredMoney">$2,415</span>
    //                 <span className="featuredMoneyRate">-11.4 <BiDownArrowAlt className='faeturedIcon negative'/></span>
    //             </div>
    //             <span className='featuredSub'>Compared to last month</span>
    //         </div>

    //         <div className="featuredItem">
    //             <span className="featuredTitle">Sales</span>
    //             <div className="featuredMoneyContainer">
    //                 <span className="featuredMoney">$4,415</span>
    //                 <span className="featuredMoneyRate">-1.4 <BiDownArrowAlt className='faeturedIcon negative'/></span>
    //             </div>
    //             <span className='featuredSub'>Compared to last month</span>
    //         </div>

    //         <div className="featuredItem">
    //             <span className="featuredTitle">Cost</span>
    //             <div className="featuredMoneyContainer">
    //                 <span className="featuredMoney">$2,225</span>
    //                 <span className="featuredMoneyRate">+11.4 <BiUpArrowAlt className='faeturedIcon'/></span>
    //             </div>
    //             <span className='featuredSub'>Compared to last month</span>
    //         </div>
    //     </div>
    //  );

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
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  1030: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
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