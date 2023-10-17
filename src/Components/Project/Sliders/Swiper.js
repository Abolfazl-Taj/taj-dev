 import Code from '../../../Assets/Pic/1.png'
 import Zen from '../../../Assets/Pic/2.png'
 import English from '../../../Assets/Pic/3.png'
 import ReactL from '../../../Assets/Pic/4.png'

// import Swiper core and required modules
import { Navigation, Pagination, A11y , EffectCards , Autoplay} from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.css';
function Slider ({darkMode}) {
  return (
    <Swiper 
      // install Swiper 
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-scrollbar-background-color': '#fff',
      }}
      loop={true}
      modules={[Navigation, Pagination, A11y , Autoplay, EffectCards ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      Autoplay 
      grabCursor={true}
      effect={'cards'}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}

    >
      <SwiperSlide>
        <div className={darkMode === true ? "Sliders dark-project" : "Sliders"}> 
        <img src={Code} alt="Code" className='Slider-Img' />
        <h1 className="Slider-Head">
            Building Some Examples
        </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={darkMode === true ? "Sliders dark-project" : "Sliders"}> 
        <img src={Zen} alt="Code" className='Slider-Img' />
        <h1 className="Slider-Head">
            Extending My English Skills

        </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={darkMode === true ? "Sliders dark-project" : "Sliders"}> 
        <img src={English} alt="Code" className='Slider-Img' />
        <h1 className="Slider-Head">
        Learning ReactJs

        </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={darkMode === true ? "Sliders dark-project" : "Sliders"}> 
        <img src={ReactL} alt="Code" className='Slider-Img' />
        <h1 className="Slider-Head">
        Relaxing In Zen Mode

        </h1>
        </div>
      </SwiperSlide>

      
    </Swiper>
  );
};
export  default  Slider