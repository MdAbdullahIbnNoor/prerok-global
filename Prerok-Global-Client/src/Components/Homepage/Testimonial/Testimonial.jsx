import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="relative lg:h-[500px] max-w-full my-12">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
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
        <SwiperSlide>
          <div className="p-4 m-4 bg-gray-600 bg-transparent rounded-lg overflow-hidden md:pt-4">
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <section className="lg:py-14">
                <div className="md:flex-col md:items-center md:justify-center">
                  <div>
                    <img alt="Taylor" loading="lazy" className="mx-auto h-20 w-3h-20 rounded-full border-4 border-amber-500 mb-2" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                  <div className="my-3 text-center md:mt-0 md:ml-4 md:flex-col md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-200">
                      Taylor Otwell
                    </div>
                    <div className="text-base leading-6 font-medium text-gray-400">
                      Creator of Laravel
                    </div>
                  </div>
                  <div className="max-w-3xl mx-auto text-center text-lg text-gray-100">
                    <p>
                      "Swift, reliable, and stress-free! My go-to for seamless deliveries. Exceptional service that exceeds expectations every time. Highly recommended!"
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-4 m-4 bg-gray-600 bg-transparent rounded-lg overflow-hidden md:pt-4">
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <section className="lg:py-14">
                <div className="md:flex-col md:items-center md:justify-center">
                  <div>
                    <img alt="Taylor" loading="lazy" className="mx-auto h-20 w-3h-20 rounded-full border-4 border-amber-500 mb-2" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                  <div className="my-3 text-center md:mt-0 md:ml-4 md:flex-col md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-200">
                      John Doe
                    </div>
                    <div className="text-base leading-6 font-medium text-gray-400">
                      CEO of Raj IT
                    </div>
                  </div>
                  <div className="max-w-3xl mx-auto text-center text-lg text-gray-100">
                    <p>
                      "Exceptional delivery service! Swift, reliable, and stress-free, they redefine efficiency. Seamless deliveries that exceed expectations every time. From prompt arrivals to secure handling, their service ensures peace of mind. Highly recommended for a superior and dependable shipping experience."
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlide components for additional testimonials */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
