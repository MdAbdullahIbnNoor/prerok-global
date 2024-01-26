import Title from "../../Title/Title";

const ContactUs = () => {
  return (
    <div className="md:flex justify-between overflow-hidden px-7 max-w-screen-2xl md:px-20 my-10 min-h-[70vh]">
      <div>
        <div data-aos="fade-up">
          <Title>CONTACT US</Title>
        <p className="text-xl text-gray-40 mt-2">Get in touch with us easiky</p>
        </div>
        <div className="mt-10 overlyA space-y-10" data-aos="fade-right">
          <div className="flex gap-4 md:gap-20">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">
                BD NUMBERS:
              </h1>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">+001-2463-957</p>
              <p className="text-gray-500 font-semibold">+001-2463-957</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-20">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">
                UK NUMBERS:
              </h1>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">+001-2463-957</p>
              <p className="text-gray-500 font-semibold">+001-2463-957</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-14">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">
                EMAIL ADDRESS:
              </h1>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">support@go.com7</p>
              <p className="text-gray-500 font-semibold">support@go.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src="https://i.ibb.co/n0C115Y/MAP.png" alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
