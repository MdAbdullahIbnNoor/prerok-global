

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
            </div>
        </div>
    );
};

export default PricingPage;