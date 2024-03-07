import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | PrerokGlobal";
  }, []);
  return (
    <div>
      {/* banner  */}
      <div
        className="hero min-h-max"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-right text-neutral-content">
          <div className="max-w-md py-8">
            <h1 className="mb-5 text-3xl font-semibold">
              PrerokGlobal Privacy Policies
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
      {/* date */}
      <div >
        <p className="ml-5">Last updated:  February 23, 2024</p>
        <p className="text-center px-8 my-3 py-2">Your trust matters to us. That is why we protect your information and use it responsibly, while continuing to deliver the excellent service you expect from FedEx. We are committed to protecting your privacy and the security of your personal data. We have created this Privacy Notice to explain how FedEx collects and uses personal data.</p>
        <p className="text-center font-bold p-2 m-2">This Privacy Policy is not a contract and does not create any legal rights or obligations.</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
