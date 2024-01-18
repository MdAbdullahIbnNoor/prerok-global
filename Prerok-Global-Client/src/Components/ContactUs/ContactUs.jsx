const ContactUs = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto">
        <hr />
      {/* 1st part  */}
      <div className="flex justify-between items-center px-20 mb-20 my-10">
        <div>
          <h1 className="text-3xl text-[#222222] font-bold">CONTACT US</h1>
          <p className="text-xl text-[#acacac]">Get in touch with us easily</p>
        </div>
        <div>
          <p className="text-sm text-[#acacac]">Home / Contact</p>
        </div>
      </div>
      {/* form part */}
      {/* contact  */}
      <div className="flex justify-around mb-14">
        <div className="space-y-8">
            <div className="flex justify-around space-x-10 items-start">
                <h4 className="font-semibold">UK NUMBERS:</h4>
                <div className=" text-[#acacac] font-semibold">
                    <p>+001-2463-957</p>
                    <p>+001-2463-957</p>
                </div>
            </div>
            <div className="flex justify-around space-x-10 items-start">
                <h4 className="font-semibold">USA NUMBERS:</h4>
                <div className=" text-[#acacac] font-semibold">
                    <p>+001-2463-957</p>
                    <p>+001-2463-957</p>
                </div>
            </div>
            <div className="flex justify-around space-x-10 items-start">
                <h4 className="font-semibold ml-1">EMAIL ADDRESS:</h4>
                <div className=" text-[#acacac] font-semibold">
                    <p>abir@gmail.com</p>
                    <p>exe@gmail.com</p>
                    
                </div>
            </div>
            
        </div>
        <div className="border h-36 mt-10"></div>
        {/* form  */}
        <div>
            <form className="space-y-5">
                <div className="flex justify-around items-center space-x-10">
                    <h4 className="font-semibold">Name: </h4>
                    <input type="text" name="name" placeholder="" id="" className="border rounded-sm w-80 h-11"/>
                </div>
                <div className="flex justify-around items-center space-x-10">
                    <h4 className="font-semibold">Email: </h4>
                    <input type="text" name="name" placeholder="" id="" className="border rounded-sm w-80 h-11"/>
                </div>
                <div className="flex justify-around items-center space-x-10">
                    <h4 className="font-semibold">Phone: </h4>
                    <input type="text" name="name" placeholder="" id="" className="border rounded-sm w-80 h-11"/>
                </div>
                <div className="flex justify-around items-center space-x-9">
                    <h4 className="font-semibold">Message: </h4>
                    <textarea type="text" name="name" placeholder="" id="" className="border rounded-sm w-80 h-20"/>
                </div>
                <input type="submit" value="Send Message" className="px-6 py-3 bg-[#f5ab35] text-white font-bold uppercase rounded-sm ml-[105px] hover:cursor-pointer hover:bg-black text-sm" />
            </form>
        </div>
      </div>
      <img src="https://c8.alamy.com/comp/2CG94WK/airplane-route-line-plane-dotted-route-airplane-destination-track-plane-traveling-destination-pathway-plane-travel-map-vector-illustration-2CG94WK.jpg" alt="" className=""/>
    </div>
  );
};

export default ContactUs;
