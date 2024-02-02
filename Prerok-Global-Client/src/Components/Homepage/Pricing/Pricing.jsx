
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Pricing = () => {
    const pricingPlans = [
        {
            id: 1,
            price: '$50',
            description: 'for a single product',
            type: 'Basic',
            weight: '3KG',
            country: 'All',
            duration: '7-14 DAYS',
            support: 'YES',
        },
        {
            id: 2,
            price: '$250',
            description: 'for package product',
            type: 'PREMIUM',
            weight: '3KG',
            country: 'All',
            duration: '7-14 DAYS',
            support: 'YES',
        },
        {
            id: 3,
            price: '$150',
            description: 'for multiple products',
            type: 'STANDARD',
            weight: '3KG',
            country: 'All',
            duration: '7-14 DAYS',
            support: 'YES',
        },
    ];

    const [hoveredPlan, setHoveredPlan] = useState(null);

    return (
        <div className='my-16 overflow-hidden'>
            <div className='relative' data-aos="fade-up"
     data-aos-duration="1000">
                <h1 className='text-2xl md:text-4xl font-bold text-center mb-2 text-gray-700'>PRICING & PLANS</h1>
                <p className='text-gray-400 text-lg text-center'>See our pricing & plans to get the best service</p>
                <h1 className='text-7xl md:text-8xl font-bold mt-16 text-center relative bottom-36 right-0 opacity-5'>PRICING</h1>
            </div>

            <div className='flex-col flex md:flex-row gap-4 lg:max-w-screen-2xl mx-auto lg:justify-center' data-aos="fade-up"
     data-aos-duration="2000">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`flex-col space-y-3 px-4 border-2 mb-4 box ${plan.id === 2 ? 'border-amber-500' : 'border-gray-200'} hover:border-amber-500 py-10 items-center justify-center lg:w-1/4 w-3/4 mx-auto ${hoveredPlan === plan.id ? 'hovered' : ''} ${plan.id === 2 ? 'bg-amber-500' : ''}`}
                        onMouseEnter={() => setHoveredPlan(plan.id)}
                        onMouseLeave={() => setHoveredPlan(null)}
                    >
                        <h1 className={`text-4xl font-bold ${plan.id === 2 ? 'text-gray-100' : 'text-gray-700'} text-center`}>{plan.price}</h1>
                        <p className={`${plan.id === 2 ? 'text-gray-100' : 'text-gray-400'} text-center`}>{plan.description}</p>
                        <div className='divide-x-8'>
                            <h3 className={`uppercase ${plan.id === 2 ? 'bg-gray-100' : 'bg-amber-500'} font-bold ${plan.id === 2 ? 'text-gray-500' : 'text-gray-100'} w-44 text-center py-2 rounded-full mx-auto`}>{plan.type}</h3>
                        </div>
                        <h3 className={`uppercase font-bold ${plan.id === 2 ? 'text-gray-100' : 'text-gray-700'} rounded-2xl px-12 pt-4`}>PRODUCT WEIGHT: <span className={`${plan.id === 2 ? 'text-gray-100' : 'text-gray-400'}`}> {plan.weight}</span></h3>
                        <h3 className={`uppercase font-bold ${plan.id === 2 ? 'text-gray-100' : 'text-gray-700'} rounded-2xl px-12`}>COUNTRY:<span className={`${plan.id === 2 ? 'text-gray-100' : 'text-gray-400'}`}> {plan.country}</span></h3>
                        <h3 className={`uppercase font-bold ${plan.id === 2 ? 'text-gray-100' : 'text-gray-700'} rounded-2xl px-12`}>DURATION: <span className={`${plan.id === 2 ? 'text-gray-100' : 'text-gray-400'}`}> {plan.duration}</span></h3>
                        <h3 className={`uppercase font-bold ${plan.id === 2 ? 'text-gray-100' : 'text-gray-700'} rounded-2xl px-12`}>SUPPORT: <span className={`${plan.id === 2 ? 'text-gray-100' : 'text-gray-400'}`}> {plan.support}</span></h3>
                        <div className={`uppercase font-bold ${plan.id === 2 ? 'text-gray-100' : 'text-gray-700'} rounded-2xl px-12 flex gap-3 items-center pt-8 justify-center ${hoveredPlan === plan.id ? 'hovered' : ''}`}>
                            {hoveredPlan === plan.id ? 'Order Now' : ''} <FaArrowRight />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
