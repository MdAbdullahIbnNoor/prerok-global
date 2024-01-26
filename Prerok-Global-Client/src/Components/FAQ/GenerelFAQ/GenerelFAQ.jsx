/* eslint-disable react/no-unescaped-entities */
import { FaEnvelopeOpenText } from "react-icons/fa6";

const GenerelFAQ = () => {
    return (
        <div>
            <div className="flex items-center">
                <div>
                    <p className="mr-3 text-2xl md:text-4xl"><FaEnvelopeOpenText /></p>
                </div>
                <div className="">
                    <h2 className="text-xl md:text-4xl text-[#222222] font-bold mt-3">General Inquiries</h2>
                    <p className="sm:text-base md:text-lg mt-2">New around here? Start with the basics</p>
                    
                </div>
            </div>
            <hr className="w-full h-1 my-5 bg-[#222222] border-0 rounded dark:bg-gray-700"/>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                What is Prerok-Global?
                </div>
                <div className="collapse-content">
                    <p>Prerok-Global is an online platform that offers global delivery services for a wide range of products. We aim to provide a seamless and convenient shopping experience for customers around the world.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                How can I place an order on Prerok-Global?
                </div>
                <div className="collapse-content">
                    <p>To place an order, simply browse our website, select the products you want, and proceed to the checkout. Follow the on-screen instructions to provide your shipping details and complete the payment process.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                Where does Prerok-Global deliver?
                </div>
                <div className="collapse-content">
                    <p>Prerok-Global delivers products worldwide. Whether you're in Asia, Europe, North America, or any other continent, we strive to reach you with our efficient global delivery network.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                What payment methods are accepted on Prerok-Global?
                </div>
                <div className="collapse-content">
                    <p>We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure payment options. Choose the method that suits you best during the checkout process.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                How can I track my order?
                </div>
                <div className="collapse-content">
                    <p>Once your order is dispatched, you will receive a confirmation email with a tracking number. You can use this tracking number on our website to monitor the real-time status and location of your shipment.</p>
                </div>
            </div>
        </div>
    );
};

export default GenerelFAQ;