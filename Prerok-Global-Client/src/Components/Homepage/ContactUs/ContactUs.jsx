import Title from "../../Title/Title";

const ContactUs = () => {
  return (
    <div className="my-10 px-5 min-h-[70vh]">
      <div>
        <Title>CONTACT US</Title>
      </div>
      <p className="text-xl text-gray-40 mt-2">Get in touch with us easiky</p>
      <div className="mt-10 space-y-10">
        <div className="flex gap-4 md:gap-20">
          <div>
            <h1 className="text-lg font-semibold text-gray-700">BD NUMBERS:</h1>
          </div>
          <div>
            <p className="text-gray-500 font-semibold">+001-2463-957</p>
            <p className="text-gray-500 font-semibold">+001-2463-957</p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-20">
          <div>
            <h1 className="text-lg font-semibold text-gray-700">UK NUMBERS:</h1>
          </div>
          <div>
            <p className="text-gray-500 font-semibold">+001-2463-957</p>
            <p className="text-gray-500 font-semibold">+001-2463-957</p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-14">
          <div>
            <h1 className="text-lg font-semibold text-gray-700">EMAIL ADDRESS:</h1>
          </div>
          <div>
            <p className="text-gray-500 font-semibold">support@go.com7</p>
            <p className="text-gray-500 font-semibold">support@go.com</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ContactUs;
