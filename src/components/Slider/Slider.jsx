import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';

const Slider = ({ props = [] }) => {
  console.log(props);
  return (
    <div className="flex items-center justify-center flex-col h-[500px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {props.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col gap-4 mb-12 group relative 
              shadow-lg text-white rounded-xl px-4 py-6 h-[220px] 
              w-[190px] lg:h-[320px] lg:w-[290px] overflow-hidden 
              cursor-pointer bg-[#242424]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-2 text-left">
                <h1 className="text-lg lg:text-xl mt-40">{item.title}</h1>
                <p className="lg:text-[16px]">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-4 left-4 
              w-[30px] h-[30px] text-white group-hover:text-blue-500 
              group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
