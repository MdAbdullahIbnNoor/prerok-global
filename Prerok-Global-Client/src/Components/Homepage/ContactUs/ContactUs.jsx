import Title from "../../Title/Title";

const ContactUs = () => {
  return (
    <div className="flex justify-between overflow-hidden my-12 md:px-12">
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
              <p className="text-gray-500 font-semibold">support@go.com</p>
              <p className="text-gray-500 font-semibold">support@go.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img className=""  src="https://i.ibb.co/n0C115Y/MAP.png" alt="contactUs Image" />
      </div>
    </div>
  );
};

export default ContactUs;
