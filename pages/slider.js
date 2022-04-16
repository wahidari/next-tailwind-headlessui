// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <>
      <Swiper className='mb-5'
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="bg-purple-600 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 1</h1>
              <h2 className="text-white text-lg">Text 1</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-emerald-600 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 2</h1>
              <h2 className="text-white text-lg">Text 2</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-orange-600 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 3</h1>
              <h2 className="text-white text-lg">Text 3</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 4</h1>
              <h2 className="text-white text-lg">Text 4</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper className='mb-5'
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={true}
        navigation={true}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-purple-500 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 1</h1>
              <h2 className="text-white text-lg">Text 1</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-emerald-500 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 2</h1>
              <h2 className="text-white text-lg">Text 2</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-orange-500 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 3</h1>
              <h2 className="text-white text-lg">Text 3</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 4</h1>
              <h2 className="text-white text-lg">Text 4</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper className='mb-5'
        modules={[Autoplay, Pagination, Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={true}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
      >
        <SwiperSlide>
          <div className="bg-purple-400 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 1</h1>
              <h2 className="text-white text-lg">Text 1</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-emerald-400 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 2</h1>
              <h2 className="text-white text-lg">Text 2</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-orange-400 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 3</h1>
              <h2 className="text-white text-lg">Text 3</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-400 h-60 text-center flex justify-center items-center">
            <div>
              <h1 className="text-white font-medium text-2xl">Text 4</h1>
              <h2 className="text-white text-lg">Text 4</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}