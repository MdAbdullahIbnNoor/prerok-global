

const Review = () => {



  return (
    <div>
      <div className="border border-[#f5ab35] w-full lg:w-11/12 mx-auto my-20 mb-4 pt-2 pb-12 shadow-xl">
        <div className="mx-0 md:mx-10">
          <div className="text-center mb-2">
            <h4 className="text-lg font-semibold text-[#222222] uppercase py-5">
              Leave A Review
            </h4>
          </div>
          {/* rating  */}
          <div className="flex justify-center mb-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
          <hr />
          <div className="mt-2">
            <form className="w-11/12 mx-auto">
              
              {/* title  */}
              <input
                type="text"
                name="name"
                className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]"
                placeholder="Your Name"
                id="name"
              />{" "}
              <br />
              {/* Photo  */}
              <input
                type="text"
                name="image"
                className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]"
                placeholder="IMAGE LINK"
                id="image"
              />{" "}
              <br />
              <textarea
                type="text"
                name="review"
                className=" textarea textarea-bordered textarea-lg w-full  py-2 px-4 mt-3  rounded-sm caret-[#f5ab35]"
                placeholder="Give Your Feedback ..."
                id="review"
              />
              <button className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222] flex items-center justify-center">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
