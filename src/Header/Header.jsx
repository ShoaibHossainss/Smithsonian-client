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
import Slide7 from '../../src/assets/5e120197-d9d5-4e8b-97a0-711160b1e449.jfif'
import Slide8 from '../../src/assets/ff382bf5-6657-40fd-9920-9edeacc89273.jfif'
import Slide9 from '../../src/assets/9e3ccfa7-ee33-4c1c-b0ff-7ee6ef6afd58.jfif'
const Header = () => {
    return (
        <div className=' lg:w-[1320px] md:w-[750px] w-full mx-auto rounded-2xl mt-10'>
        <h3 className='text-center text-black text-2xl mb-4'>Spot</h3>
        <h3 className='text-center text-black text-xl mb-4'>Here you can find some of the best tourist spot we offer</h3>
        <div className='px-4 pb-4 '>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
        spaceBetween={20}
        slidesPerView={4}
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        <SwiperSlide><div className='translate-y-4'>
        <img className='rounded-3xl' src={Slide1} alt="" />
        <h3 className='-translate-y-10  text-center text-white lg:text-3xl md:text-2xl lg:p-1 rounded-b-2xl bg-[#41505c]'>Bali</h3>
          </div></SwiperSlide>
        <SwiperSlide><div className='translate-y-4'>
        <img className='rounded-3xl'  src={Slide2} alt="" />
        <h3 className='-translate-y-10  text-center text-white lg:text-3xl md:text-2xl p-1 rounded-b-2xl bg-[#41505c]'>Sundarban</h3>
          </div></SwiperSlide>
        <SwiperSlide><div className='translate-y-4'>
        <img className='rounded-3xl '  src={Slide3} alt="" />
        <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl p-1 rounded-b-2xl bg-[#41505c]'>Rangamati</h3>
        </div></SwiperSlide>
        <SwiperSlide>
          <div className='translate-y-4'>
          <img className='rounded-3xl '  src={Slide4} alt="" />
          <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl text-sm p-1 rounded-b-2xl bg-[#41505c]'>Cox Bazar</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='translate-y-4'>
          <img className='rounded-3xl '  src={Slide5} alt="" />
          <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl text-sm p-1 rounded-b-2xl bg-[#41505c]'>Pattaya</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='translate-y-4'>
          <img className='rounded-3xl '  src={Slide6} alt="" />
          <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl text-sm p-1 rounded-b-2xl bg-[#41505c]'>Phi Phi Islands</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='translate-y-4'>
          <img className='rounded-3xl '  src={Slide7} alt="" />
          <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl text-sm rounded-b-2xl p-1 bg-[#41505c]'>Borobudur</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='translate-y-4'>
          <img className='rounded-3xl '  src={Slide8} alt="" />
          <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl text-sm p-1 rounded-b-2xl bg-[#41505c]'>Chiang Mai</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='translate-y-4'>
          <img className='rounded-3xl '  src={Slide9} alt="" />
          <h3 className='-translate-y-10 text-center text-white lg:text-3xl md:text-2xl text-sm p-1 rounded-b-2xl bg-[#41505c]'>Ha Long Bay</h3>
          </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
         
      </div>
    );
};

export default Header;