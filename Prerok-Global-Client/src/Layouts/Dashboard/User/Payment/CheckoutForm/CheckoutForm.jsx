/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import { axiosSecure } from "../../../../../api/axiosInstances";
import { ImSpinner } from "react-icons/im";
import Swal from "sweetalert2";

const CheckoutFrom = ({ closeModal }) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Need Booking data
  const price = 5000;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: price })
      .then((res) => {
        // console.log(res.data);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error("payment intent:", error);
      });
  }, []);





  const handelPayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //   confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment Intent", paymentIntent);
    }

    setProcessing(true);

    if (paymentIntent?.status === "succeeded") {
      console.log("transaction id", paymentIntent.id);
      setTransactionId(paymentIntent.id);

      // update payment status paid
      // axiosSecure.patch(`/accepttrainer/role/${_id}`)
      // .then(res =>{
      //     console.log(res.data)
      // })

      const currentDate = new Date();
      const utcFormattedDate = currentDate.toISOString();
      console.log(utcFormattedDate);
      // now save the payment information  in the database
      const payment = {
        email: user.email,
        name: user?.displayName,
        price: price,
        transactionId: paymentIntent.id,
        date: utcFormattedDate,
        status: "paid",
      };

      // send  data to the db
      const res = await axiosSecure.post("/payment-info", payment);
      console.log(res.data);
      if (res?.data?.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Payment Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        //   redirect to payment history page
        setProcessing(false);
        navigate("/dashboard/payment-history");
      }
    }
  };

  return (
    <>
      <form className="my-2" onSubmit={handelPayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner className="m-auto animate-spin" size={24} />
            ) : (
              `Pay ${price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutFrom;
