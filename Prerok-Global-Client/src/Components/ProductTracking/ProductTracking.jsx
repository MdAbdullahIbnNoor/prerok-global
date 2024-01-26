const ProductTracking = () => {
  return (
    <div className="overflow-hidden lg:max-w-screen-2xl my-10 mx-auto px-3 md:px-20">

        {/* title section */}
      <div>
        <h1 className="text-2xl font-bold uppercase  md:text-3xl">
          Product Tracking{" "}
        </h1>
        <p className="text-gray-500">Track your product & see the current condition</p>
      </div>

      {/* product tracking field  */}
      <div className="w-full mt-20 "  data-aos="fade-up"
     data-aos-duration="2000" >
        <div className="lg:w-1/2 w-full mx-auto bg-white border-2 border-red-500 ">
          <p className="font-medium text-xl px-8 py-4">
            TRACK YOUR PRODUCT{" "}
            <span className="font-light text-sm text-slate-500">
              Now you can track your product easily
            </span>
          </p>
          <div className="md:flex justify-center p-5 ">
            <input
              type="text"
              name="productID"
              className="border-2 mb-2 border-slate-300   md:w-[400px] mx-auto "
              id=""
              placeholder="Enter your product ID"
              data-aos="fade-right"
            />
            <button className="btn bg-red-500 hover:bg-black  h-14 md:w-72 ml-4 block mx-auto text-white" data-aos="fade-left">
              TRACK YOUR PRODUCT
            </button>
          </div>
        </div>
      </div>


      {/* image and product details sections  */}
      <div className="md:w-2/3 mt-10 md:mt-20  mx-auto">
        <div className="md:flex ">
                <div className="flex-[1] w-full object-cover " data-aos="zoom-in-right">
                    <img src="https://i.ibb.co/f4y9xtm/download.png" alt="product picture" />
                </div>
                <div className="flex-[1] p-3 bg-slate-800 space-y-7 text-gray-100" data-aos="zoom-in-left">
                  
                    <div className=" p-1 border-b-2 py-4 ">
                        <span className="mr-5">Product Name: </span>
                        <span>HP Laptop</span>
                    </div>
                    <div className=" p-1 border-b-2 ">
                        <span className="mr-5">PRODUCT ID: </span>
                        <span> 9034215</span>
                    </div>
                    <div className=" p-1 border-b-2 ">
                        <span className="mr-5">ORDER DATE:</span>
                        <span> 21st Jan, 2024</span>
                    </div>
                    <div className="p-1 border-b-2 ">
                        <span className="mr-5">ORDER STATUS: </span>
                        <span className="text-yellow-400"> On Process</span>
                    </div>
                    <div className="p-1 border-b-2 ">
                        <span className="mr-5">ORDER TYPE:</span>
                        <span className="">  Basic ($50)</span>
                    </div>
                </div>
        </div>
      </div>

      {/* bg image sections  */}
      <div className="w-3/2 mx-auto mt-10" data-aos="fade-up ">
      <img src="https://c8.alamy.com/comp/2CG94WK/airplane-route-line-plane-dotted-route-airplane-destination-track-plane-traveling-destination-pathway-plane-travel-map-vector-illustration-2CG94WK.jpg" alt="" className=""/>
      </div>
    
      
      
    </div>
  );
};

export default ProductTracking;
