const PrivacyPage = () => {
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
              PrerokGlobal Privacy Notice
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-slate-100 flex justify-around py-5 px-2">
            <div>Global Privacy Policy</div>
            <div>Privacy Notice</div>
            <div>Cookie Notice</div>
            <div>Binding Corporate rules</div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
