

const PricingPage = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* first section  */}
            <div className="bg-slate-500 text-white flex justify-between px-3 py-3">
                <h2 className="text-2xl">PrerokGlobal Ship Manager</h2>
                <div className="flex items-center gap-5 text-sm">
                    <div>Advance Shipping</div>
                    <div>Help</div>
                </div>
            </div>
            {/* second section  */}
            <div className="flex bg-slate-300 text-slate-700 px-3 py-2 gap-2 text-lg font-medium">
                <div>1.</div>
                <div>Address Information</div>
            </div>
            {/* form section  */}
            <div>
                <div className="px-5">
                    <h2 className="text-2xl mt-2 text-amber-500">Enter your (From) address and the recipient&apos;s (To) address.</h2>
                </div>
                <div>
                    <form className="flex flex-col lg:flex-row  gap-10">
                        <div className="w-full lg:w-1/2">
                            <h4 className="font-semibold text-amber-500 ml-5">From Address</h4>
                            <hr className="ml-5"/>
                            <div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Your Name:</div>
                                    <div><input type="text" className="border px-2 " name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Company:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="(optional)" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Country / Location:</div>
                                    <div><input type="text" className="border px-2" name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Address:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="Street Address" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div></div>
                                    <div><input type="text" className="border px-2" name="" placeholder="APT,Floor, Suite etc." id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Postal Code:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>City:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Phone:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Email:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Tax ID no.</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h4 className="font-semibold text-amber-500">To Address</h4>
                            <hr />
                            <div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Recipient Name:</div>
                                    <div><input type="text" className="border px-2" name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Company:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="(optional)" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Country / Location:</div>
                                    <div><input type="text" className="border px-2" name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Address:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="Street Address" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div></div>
                                    <div><input type="text" className="border px-2" name="" placeholder="APT,Floor, Suite etc." id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Postal Code:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>City:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Phone:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Email:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Tax ID no.</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-end gap-5 p-3 px-12">
                                    
                                    <div><input type="checkbox" name="" id="" /></div>
                                    <div>This is residential address</div>
                                </div>
                                <div className="flex justify-end">
                                <input type="submit"  className="btn bg-yellow-400 w-32 p-2 flex text-center items-center justify-center mr-12" value="Continue" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;