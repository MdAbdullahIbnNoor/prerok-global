import car from './../../../assets/Home/delivery-truck02.png'
import { GoRocket } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsTruckFront } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div className='md:flex px-12'>
            <div className='flex-1'>
                <h2 className="text-3xl font-bold mt-10 text-[#222222]">About Us</h2>
                <p className="text-base text-[#acacac] mt-5 mb-7">Welcome to Prerok-Global! Discover a world of seamless delivery services with us. Experience swift deliveries, hassle-free returns, real-time shipment tracking, and convenient online quoting and booking. Stay informed with our real-time notifications, and connect with our dedicated customer support via live chat. Your satisfaction is our priority.</p>

                {/* Second horizontal divide section */}

                {/* first element */}
                <div className='flex items-center md:ml-10 mt-5'>
                    <div>
                        <p className='text-3xl'><GoRocket /></p>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-lg md:text-xl font-bold text-[#222222] mb-2'>FAST DELIVERY</h2>
                        <p className='text-base text-[#acacac] md:pr-10'>Express shipping for your time-sensitive packages, always on-time.</p>
                    </div>
                </div>

                {/* Second element */}
                <div className='flex items-center md:ml-10 mt-5'>
                    <div>
                        <p className='text-3xl'><IoShieldCheckmarkOutline /></p>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-lg md:text-xl font-bold text-[#222222] mb-2'>SECURED SERVICE</h2>
                        <p className='text-base text-[#acacac] md:pr-10'>Your parcels safeguarded with top-notch security and reliability assurance.</p>
                    </div>
                </div>

                {/* Third element */}
                <div className='flex items-center md:ml-10 mt-5 md:mb-10'>
                    <div>
                        <p className='text-3xl'><BsTruckFront /></p>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-lg md:text-xl font-bold text-[#222222] mb-2'>WORLDWIDE SHIPPING</h2>
                        <p className='text-base text-[#acacac] md:pr-10'>Seamlessly connect globally, ensuring your packages reach every destination.</p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <img className='md:h-[500px] w-[600px]' src={car} alt="delivery car image" />
            </div>
        </div>
    );
};

export default AboutUs;