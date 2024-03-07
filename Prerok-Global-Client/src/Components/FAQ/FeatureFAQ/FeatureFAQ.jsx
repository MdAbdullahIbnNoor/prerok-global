/* eslint-disable react/no-unescaped-entities */
import { MdOutlineStarRate } from "react-icons/md";

const FeatureFAQ = () => {
    return (
        <div>
            <div className="flex items-center">
                <div>
                    <p className="mr-3 text-2xl md:text-4xl"><MdOutlineStarRate /></p>
                </div>
                <div className="">
                    <h2 className="text-xl md:text-4xl text-[#222222] font-bold mt-3">Prerok-Global Features</h2>
                    <p className="sm:text-base md:text-lg mt-2 ">Dive deeper into Prerok Global's robust features.</p>
                    
                </div>
            </div>
            <hr className="w-full h-1 my-5 bg-[#222222] border-0 rounded dark:bg-gray-700"/>


            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                What sets Prerok-Global apart from other online delivery platforms?
                </div>
                <div className="collapse-content">
                    <p>Prerok-Global stands out with its extensive global reach, providing customers worldwide access to a diverse range of products. Our user-friendly interface, efficient delivery network, and commitment to customer satisfaction make us a preferred choice.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                Are there any membership or subscription plans on Prerok-Global?
                </div>
                <div className="collapse-content">
                    <p>Currently, Prerok-Global does not offer membership or subscription plans. We believe in providing a seamless shopping experience for all users without the need for additional fees.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                Can I request a specific delivery time for my order?
                </div>
                <div className="collapse-content">
                    <p>Prerok-Global aims to deliver your order as quickly as possible. While specific delivery times can't be guaranteed due to various factors, you can track your order in real-time using the provided tracking number for the most accurate updates.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                Are there any loyalty programs or rewards for frequent shoppers?
                </div>
                <div className="collapse-content">
                    <p>We value our customers, and plans for loyalty programs are in the pipeline. Stay tuned for exciting updates on potential rewards and special offers for our loyal Prerok-Global shoppers.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                How does Prerok-Global ensure the quality of the products offered?
                </div>
                <div className="collapse-content">
                    <p>We partner with reputable vendors and suppliers to maintain the highest product quality standards. Additionally, customer reviews and feedback play a crucial role in shaping our product selection, ensuring customer satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureFAQ;