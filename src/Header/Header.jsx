import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Slide1 from '../../src/assets/6c7940e8-cda7-4a2a-8e23-a718577ae9ac.jfif'
import Slide2 from '../../src/assets/fotor-ai-20240429174543.jpg'
import Slide3 from '../../src/assets/6a87781b-2ffb-437a-b08a-fbce59907663.jfif'
import Slide4 from '../../src/assets/fotor-ai-20240429174445.jpg'
import Slide5 from '../../src/assets/fotor-ai-20240429175120.jpg'
import Slide6 from '../../src/assets/fotor-ai-202404302946.jpg'
const Header = () => {
    return (
        <div className='bg-green-600 lg:w-[1320px] md:w-[750px] w-[365px] mx-auto rounded-2xl mt-10'>
        <h3   className='text-center md:font-semibold md:text-xl font-sans text-white py-4 card-body'>Here you can see some of our top rated properties
        <br />
        It will help you to select yours.
        </h3>
        <div className='px-4 pb-4'>
        <Swiper data-aos="fade-down" data-aos-anchor-placement="top-center"  navigation={true} modules={[Navigation]} className="mySwiper"
        spaceBetween={20}
        slidesPerView={4}
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        <SwiperSlide><img className='rounded-3xl ' src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl'  src={Slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl '  src={Slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl '  src={Slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl '  src={Slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl '  src={Slide6} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
         
      </div>
    );
};

export default Header;