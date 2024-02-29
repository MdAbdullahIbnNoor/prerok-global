import { FaAddressCard, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const GetSupport = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Get Support</h2>
      <div className="flex justify-center items-center space-x-8 mb-8">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <div alt="Phone" className="w-12 h-12 mb-2">
            <FaPhone />
          </div>
          <p className="text-lg">+1 123 456 7890</p>
          <p className="text-sm text-gray-500">
            Call us for immediate assistance
          </p>
        </div>
        {/* Email */}
        <div className="flex flex-col items-center">
          <div alt="Email" className="w-12 h-12 mb-2">
            <MdEmail />
          </div>
          <p className="text-lg">support@example.com</p>
          <p className="text-sm text-gray-500">
            Send us an email for inquiries
          </p>
        </div>
        {/* Address */}
        <div className="flex flex-col items-center">
          <div alt="Address" className="w-12 h-12 mb-2">
            <FaAddressCard />
          </div>
          <p className="text-lg">123 Main St, City, Country</p>
          <p className="text-sm text-gray-500">
            Visit our office for face-to-face support
          </p>
        </div>
      </div>
      <p className="text-lg text-center mb-4">
        Connect with us on Facebook Messenger or walk into our office directly
        for assistance.
      </p>
    </div>
  );
};

export default GetSupport;
