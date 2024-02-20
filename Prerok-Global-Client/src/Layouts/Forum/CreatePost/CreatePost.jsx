
const CreatePost = () => {
  return <div>
    <div>
            <div className="border border-[#f5ab35] w-full lg:w-6/12 mx-auto mt-24 mb-10 pt-8 pb-8 shadow-xl">
                <div className="mx-0 md:mx-10">
                    <div className="text-center mb-8">
                        <h4 className="text-xl font-semibold text-[#222222] uppercase">Create A Post</h4>
                        
                    </div>
                    <hr />
                    <div className="mt-6">
                        <form className="w-11/12 mx-auto">
                            {/* title  */}
                            <input type="text" name="title" className="border h-11 w-full px-4 py-2 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="ENTER TITLE" id="title" /> <br />
                            {/* Photo  */}
                            <input type="text" name="image" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="IMAGE LINK" id="photo" /> <br />
                            {/* password  */}
                            <textarea type="text" name="body" className=" textarea textarea-bordered textarea-lg w-full  py-4 px-4 mt-3  rounded-sm caret-[#f5ab35]" placeholder="..." id="body" />
                            <button  className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222] flex items-center justify-center">
                                POST
                            </button>
                        </form>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
  </div>;
};

export default CreatePost;
