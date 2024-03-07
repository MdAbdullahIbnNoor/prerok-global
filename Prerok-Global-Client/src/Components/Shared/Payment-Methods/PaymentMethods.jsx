import stripeLogo from "../../../assets/stripe.jpg";
import paypalLogo from "../../../assets/paypal.png";
import bankTransferLogo from "../../../assets/bank_transfer.png";
import { useEffect } from "react";

const PaymentMethods = () => {
  useEffect(() => {
    document.title = "Payment Methods | PrerokGlobal";
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Payment Methods Accepted</h2>
      <p className="text-lg mb-4">
        We currently accept payments via Stripe. Soon, we will integrate other
        payment methods including PayPal, bank transfer, and more.
      </p>
      <div className="flex justify-center items-center space-x-8 mb-8">
        <img src={stripeLogo} alt="Stripe" className="w-24 h-12" />
        <img src={paypalLogo} alt="PayPal" className="w-24 h-12" />
        <img src={bankTransferLogo} alt="Bank Transfer" className="w-24 h-12" />
      </div>
    </div>
  );
};

export default PaymentMethods;
