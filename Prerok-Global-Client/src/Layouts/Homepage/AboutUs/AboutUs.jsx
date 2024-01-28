import car from './../../../assets/Home/delivery-truck02.png'
import { GoRocket } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsTruckFront } from "react-icons/bs";
import Title from '../../../Components/Title/Title';


const AboutUs = () => {
    return (
        <div className='md:flex px-12 max-w-screen-2xl mx-auto'>

            <div className='flex-1'>
              
            
                <div data-aos="fade-right">
                    <Title>
                    About Us
                    </Title>
               
                </div>
                <p className="text-base text-[#acacac] mt-5 mb-7" data-aos="fade-right">Welcome to Prerok-Global! Discover a world of seamless delivery services with us. Experience swift deliveries, hassle-free returns, real-time shipment tracking, and convenient online quoting and booking. Stay informed with our real-time notifications, and connect with our dedicated customer support via live chat. Your satisfaction is our priority.</p>

                {/* Second horizontal divide section */}

                {/* first element */}
                <div className='flex items-center md:ml-10 mt-5' data-aos="fade-right">
                    <div>
                        <p className='text-3xl' data-aos="fade-right"><GoRocket /></p>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-lg md:text-xl font-bold text-[#222222] mb-2' data-aos="fade-right">FAST DELIVERY</h2>
                        <p className='text-base text-[#acacac] md:pr-10'>Express shipping for your time-sensitive packages, always on-time.</p>
                    </div>
                </div>

                {/* Second element */}
                <div className='flex items-center md:ml-10 mt-5' data-aos="fade-right">
                    <div data-aos="fade-right">
                        <p className='text-3xl'><IoShieldCheckmarkOutline /></p>
                    </div>
                    <div className='ml-3' data-aos="fade-right">
                        <h2 className='text-lg md:text-xl font-bold text-[#222222] mb-2'>SECURED SERVICE</h2>
                        <p className='text-base text-[#acacac] md:pr-10'>Your parcels safeguarded with top-notch security and reliability assurance.</p>
                    </div>
                </div>

                {/* Third element */}
                <div className='flex items-center md:ml-10 mt-5 md:mb-10' data-aos="fade-right">
                    <div>
                        <p className='text-3xl'><BsTruckFront /></p>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-lg md:text-xl font-bold text-[#222222] mb-2'>WORLDWIDE SHIPPING</h2>
                        <p className='text-base text-[#acacac] md:pr-10'>Seamlessly connect globally, ensuring your packages reach every destination.</p>
                    </div>
                </div>
            </div>

            <div className='flex-1' data-aos="fade-left">
                <img className='md:h-[500px] w-[600px]' src={car} alt="delivery car image" />
            </div>
        </div>
    );
};

export default AboutUs;