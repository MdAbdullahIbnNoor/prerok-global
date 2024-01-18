const ContactUs = () => {
  return (
    <div className="my-10 border border-red-500">
      {/* 1st part  */}
      <div className="flex justify-between items-center px-20 mb-20">
        <div>
          <h1 className="text-3xl text-[#222222] font-bold">CONTACT US</h1>
          <p className="text-xl text-[#acacac]">Get in touch with us easily</p>
        </div>
        <div>
          <p className="text-sm text-[#acacac]">Home / Contact</p>
        </div>
      </div>
      {/* form part */}
      <div className="flex justify-around">
        <div className="space-y-8">
            <div className="flex justify-between items-start">
                <h4 className="font-semibold">UK NUMBERS:</h4>
                <div className="ml-10 text-[#acacac] font-semibold">
                    <p>+001-2463-957</p>
                    <p>+001-2463-957</p>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <h4 className="font-semibold">USA NUMBERS:</h4>
                <div className="ml-10 text-[#acacac] font-semibold">
                    <p>+001-2463-957</p>
                    <p>+001-2463-957</p>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <h4 className="font-semibold">EMAIL ADDRESS:</h4>
                <div className="ml-10 text-[#acacac] font-semibold">
                    <p>abir@gmail.com</p>
                    <p>exe@gmail.com</p>
                    
                </div>
            </div>
            
        </div>
        
        <div>
            <form action="">
                <input type="text" name="name" placeholder="Name" id="" className="border border-green-500"/>name
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
