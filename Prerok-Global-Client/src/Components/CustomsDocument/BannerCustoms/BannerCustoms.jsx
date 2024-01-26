import React from 'react'
import bannerImg from '../../../assets/images/customs/banner.jpg';

const BannerCustoms = () => {
    return (
        <div className="hero min-h-72 md:min-h-[700px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-75 lg:bg-opacity-30"></div>
            <div className="text-center">
                <div className="flex flex-1 gap-10">
                    <div className="w-[400px] lg:w-[1400px] lg:bg-cyan-500 px-10 lg:pr-44 lg:pl-20 lg:py-8 text-left rounded-r-2xl ">
                        <h1 className="mb-5 text-xl md:text-4xl font-bold text-amber-400">Customs Documentation</h1>
                        <p className="mb-5 text-2xl lg:text-6xl text-cyan-50 font-bold">Ensuring Complete and <br/>
                            Compliant Clearance</p>
                    </div>
                    <div className="lg:w-1/2">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCustoms