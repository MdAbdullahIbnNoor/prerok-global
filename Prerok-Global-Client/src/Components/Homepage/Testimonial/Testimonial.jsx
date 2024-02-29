/* eslint-disable react/no-unescaped-entities */

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { axiosPublic } from '../../../api/axiosInstances';

const Testimonial = () => {

  const [allTestimonials, setAllTestimonials] = useState([]);
  useEffect(() => {
    axiosPublic("/api/testimonials/get-all-testimonials").then((res) => {
      console.log(res.data);
      setAllTestimonials(res.data);
    });
  }, [setAllTestimonials]);

 

  return (
    <div className="relative lg:h-[500px] max-w-full my-12">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Testimonials Swiper */}
      <Swiper
        className="absolute inset-0"
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {
          allTestimonials.map((testimonial) => <SwiperSlide key={testimonial.id}>
          <div className="p-4 m-4 bg-gray-600 bg-transparent rounded-lg overflow-hidden md:pt-4">
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <section className="lg:py-14">
                <div className="md:flex-col md:items-center md:justify-center">
                  <div>
                    {
                      testimonial.userImage ? 
                      <img alt="User Image" loading="lazy" className="mx-auto h-20 w-3h-20 rounded-full border-4 border-amber-500 mb-2" src={testimonial.userImage} />
                      :
                      <img alt="User Image" loading="lazy" className="mx-auto h-20 w-3h-20 rounded-full border-4 border-amber-500 mb-2" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    }
                    
                  </div>
                  <div className="my-3 text-center md:mt-0 md:ml-4 md:flex-col md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-200">
                      {testimonial.name}
                    </div>
                    <div className="text-base leading-6 font-medium text-gray-400">
                      Our Client
                    </div>
                  </div>
                  <div className="max-w-3xl mx-auto text-center text-lg text-gray-100">
                    <p>
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </SwiperSlide>)
        }

        

        {/* Add more SwiperSlide components for additional testimonials */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
