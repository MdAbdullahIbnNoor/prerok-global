import { SiClockify } from "react-icons/si";
import { FaHandHoldingHand } from "react-icons/fa6";
import { SiOpslevel } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdDeliveryDining, MdPayment, MdPayments } from "react-icons/md";
import { useState } from "react";
import PaymentModal from "../Payment/PaymentModal/PaymentModal";

import stripe from "../../../../assets/payment.jpg";
import ssl from "../../../../assets/stripe.jpg";
import useAuth from "../../../../hooks/useAuth";

const Bookings = () => {
  let [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth()

  const closeModal = () => {
    setIsOpen(false);
  };


//   need product informations 
const pName = "laptop"
const bName = "dell"
const amoutn = 1000
const productId = "93240u30e"


  const handelSslPayment = () =>{
    const paymentInfo ={
        userEmail : user?.email,
        name: user?.displayName,
        productName: pName,
        brandName: bName,
        price: parseFloat( amoutn),
        productId: productId,
      }
    //   console.log(paymentInfo)
  
    //   fetch('http://localhost:5000/sslPay', {
    //     method: 'POST',
    //     headers:{
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(paymentInfo)
    //   })
    //   .then(res => res.json())
    //   .then( data =>{
    //     window.location.replace(data.url)
    //     console.log(data)
    //   })
  }

  return (
    <div className="">
      <div className="mb-5 text-center">
        <h1 className="text-gray-500 text-2xl font-semibold ">
          Your Delivery Performance
        </h1>
        <div>
          <h1 className="text-3xl font-semibold text-orange-400 ">
            Welcome
            <span className=" text-yellow-500"> User </span>
          </h1>
        </div>
      </div>

      {/* delevery status section  */}
      <div>
        <div className="mx-auto">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
            {/* first card  */}
            <div className=" flex items-center gap-4 w-56 p-4 h-30  shadow-md rounded-sm ">
              {/* icon */}
              <div className="">
                <SiClockify className="text-3xl font-bold text-red-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">20</p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Delayed
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <FaHandHoldingHand className="text-3xl font-bold text-yellow-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">6</p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Exceptence
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <SiOpslevel className="text-3xl font-bold text-red-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">20</p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Label Creation
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <FaCircleArrowRight className="text-3xl font-bold text-purple-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">20</p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Early
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <FaHandshakeSimple className="text-3xl font-bold text-gray-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">20</p>
                <h1 className=" font-semibold text-gray-600">ONTIME </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <MdDeliveryDining className="text-3xl font-bold text-green-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">20</p>
                <h1 className=" font-semibold text-gray-600">DELIVERED</h1>
              </div>
            </div>
          </div>

          <div className="grid gap-4 grid-col-col mt-10 md:grid-cols-2">
            <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
              {/* icon */}
              <div className="">
                <MdPayment className="text-3xl font-bold text-green-500" />
              </div>
              {/* content */}
              <div>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Total
                  <p className="text-3xl font-bold text-gray-500">$ 3000 </p>
                </h1>
              </div>
            </div>

            <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
              {/* icon */}
              <div className="">
                <MdPayments className="text-3xl font-bold text-green-500" />
              </div>
              {/* content */}
              <div>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Refund Money
                  <p className="text-3xl font-bold text-gray-500">$ 00 </p>
                </h1>
              </div>
            </div>


            {/* payment mathodes  */}
            <div className="md:w-7/6 mx-auto">
              <h1 className="text-2xl font-bold text-gray-400">Payment Mathodes</h1>

              <div className="flex justify-between items-center   bg-gray-50 ">
                
                <div className="flex justify-between items-center">
                  <div className="rounded-md">
                    <img className="w-[300px] h-[100px]" src={ssl} alt="" />
                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn bg-orange-400 text-white px-10 text-lg block w-full mx-auto"
                    >
                      Payment
                    </button>
                  </div>

                  <div></div>
                </div>

                <div className="flex justify-between items-center border-gray-100">
                  <div className=" ">
                    <img className="w-[300px] h-[100px]" src={stripe} alt="" />
                    <button
                      onClick={handelSslPayment}
                      className="btn bg-orange-400 text-white px-10 text-lg w-full block mx-auto"
                    >
                      Payment
                    </button>
                  </div>               
                </div>
              </div>
            </div>
          </div>


          {/* table  */}
          <div>
            <div className="overflow-x-auto mt-20 bg-gray-50 p-3 rounded-lg">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Invoice Id</th>
                    <th>TRACKING NUMBER</th>
                    <th>STATUS</th>
                    <th>SCHEDUL DELIVERY DATE </th>
                    <th>SCHEDUL DELIVERY TIME </th>
                    <th>Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>032974293</td>
                    <td>Dealy</td>
                    <td>12-03-22</td>
                    <td>12:40 pm</td>
                    <td></td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>032974293</td>
                    <td>Dealy </td>
                    <td>14-03-23</td>
                    <td>11:20 pm</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>032974293</td>
                    <td>Pending</td>
                    <td>14-03-23</td>
                    <td>01:40 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
        


          </div>

       
        </div>
      </div>

      <PaymentModal closeModal={closeModal} isOpen={isOpen}></PaymentModal>
    </div>
  );
};

export default Bookings;
