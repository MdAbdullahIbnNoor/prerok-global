import { Link } from "react-router-dom";


const GlobalPrivacy = () => {
    return (
        <div>
            {/* banner  */}
      <div
        className="hero min-h-max"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661575403234-c5f9020094c4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-right text-neutral-content">
          <div className=" py-8">
            <h1 className="mb-5 text-3xl font-semibold">
              PrerokGlobal Global Privacy Policy
            </h1>
          </div>
        </div>
      </div>
      {/* 4 sections  */}
      <div>
        <div className="bg-slate-100 flex justify-around py-5 px-2">
        <Link to="/global-policy" className="hover:text-amber-500 hover:underline">Global Privacy Policy</Link>
            <Link to="/privacy-notice" className="hover:text-amber-500 hover:underline">Privacy Notice</Link>
            <div>Cookie Notice</div>
            <div>Binding Corporate rules</div>
        </div>
      </div>
        </div>
    );
};

export default GlobalPrivacy;