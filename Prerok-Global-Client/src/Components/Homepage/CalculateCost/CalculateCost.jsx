import deliveryman from './../../../assets/Home/delivery-man02.png'

const CalculateCost = () => {

    return (
        <div className='md:flex min-h-screen overflow-hidden'>

            {/* For Left side image section */}
            <div className='flex-1' data-aos="fade-right">
                <img className='md:mt-40 md:h-[450px] md:w-[680px]' src={deliveryman} alt="Delivery man image" />
            </div>

            {/* For right side Section */}
            <div className='flex-1' data-aos="fade-left">
                <h2 className='text-xl md:text-3xl font-bold mt-10 text-[#222222]'>CALCULATE YOUR COST</h2>
                <p className='text-base text-[#acacac] mt-5 mb-7'>Please provide your information and calculate your cost.</p>

                {/* Form section */}

                <form className="flex justify-center items-center w-full">
                    <div className="w-full space-y-3">
                        <div>
                            <label className='md:text-lg font-bold mr-3 text-[#222222]'>HEIGHT (CM):</label>
                            <input className='border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4' type="text" />
                        </div>
                        <div>
                            <label className='md:text-lg font-bold mr-4 text-[#222222]'>WIDTH (CM):</label>
                            <input className='border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4' type="text" />
                        </div>
                        <div>
                            <label className='md:text-lg font-bold mr-5 text-[#222222]'>DEPTH (CM):</label>
                            <input className='border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4' type="text" />
                        </div>
                        <div>
                            <label className='md:text-lg font-bold mr-3 text-[#222222]'>WEIGHT (KG):</label>
                            <input className='border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4' type="text" />
                        </div>
                        <div>
                            <label className='md:text-lg font-bold mr-9 text-[#222222]'>LOCATION:</label>
                            <input className='border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 px-3 w-1/3 md:mr-12' type="text" placeholder='From' />
                            <input className='border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-1/3 px-3' type="text" placeholder='To' />
                        </div>
                        <div>
                            <label className='md:text-lg font-bold mr-11 text-[#222222]'>PACKAGE:</label>
                            <select className="select select-ghost border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg px-3 py-2 w-3/4">
                                <option selected>Pick the best package for you</option>
                                <option>USUAL DELIVERY</option>
                                <option>FASTED DELIVERY: +$25</option>
                                <option>DISCOUNT DELIVERY: -10%</option>
                            </select>
                        </div>

                        {/* Button related work */}
                        <div className='md:flex justify-end mb-5'>
                            <div className='w-3/4 mr-8 mt-3'>
                                <button className='border bg-[#f5ab35] w-3/4 py-3 border-none shadow-xl text-white font-semibold'>Button</button>
                                <button className='border bg-[#df9826] w-1/4 py-3 border-none shadow-xl text-white font-semibold'>$15.00</button>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default CalculateCost;