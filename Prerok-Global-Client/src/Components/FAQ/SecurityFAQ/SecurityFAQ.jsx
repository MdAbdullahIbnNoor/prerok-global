import { MdOutlineSecurity } from "react-icons/md";

const SecurityFAQ = () => {
    return (
        <div>

            <div className="flex items-center">
                <div>
                    <p className="mr-3 text-2xl md:text-4xl"><MdOutlineSecurity /></p>
                </div>
                <div className="">
                    <h2 className="text-xl md:text-4xl text-[#222222] font-bold mt-3">Permissions & Privacy</h2>
                    <p className="sm:text-base md:text-lg mt-2">We take security & privacy seriously.</p>

                </div>
            </div>
            <hr className="w-full h-1 my-5 bg-[#222222] border-0 rounded dark:bg-gray-700"/>


            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                How do Prerok-Global permissions work?
                </div>
                <div className="collapse-content">
                    <p>At Prerok-Global, we prioritize your privacy. We collect and use your personal information only for order processing, shipping, and customer support. Rest assured, your data is handled with the utmost confidentiality. Refer to our Privacy Policy for more details.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                Do you share my information with third parties?
                </div>
                <div className="collapse-content">
                    <p>We do not share your personal information with third parties for marketing purposes. However, we may share data with trusted partners for order fulfillment and delivery purposes. Refer to our Privacy Policy for a comprehensive overview.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                How secure is my payment information on Prerok-Global?
                </div>
                <div className="collapse-content">
                    <p>Your payment information is highly secure on Prerok-Global. We use industry-standard encryption protocols to safeguard your financial data during the entire transaction process.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                Can I opt-out of receiving marketing emails from Prerok-Global?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can manage your email preferences in your account settings or use the unsubscribe link in our marketing emails to opt-out. We respect your choices regarding communication.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg md:text-xl font-medium">
                What measures does Prerok-Global take to protect my account from unauthorized access?
                </div>
                <div className="collapse-content">
                    <p>We implement robust security measures to protect your account, including secure password protocols and account verification processes. Always ensure to use a strong, unique password for your Prerok-Global account.</p>
                </div>
            </div>
        </div>
    );
};

export default SecurityFAQ;