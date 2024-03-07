import { useNavigate, useRouteError } from "react-router-dom";
import image from "../../assets/error.svg";
import { useEffect } from "react";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    document.title = "Opps. Your are lost! | PrerokGlobal";
  }, []);

  return (
    <div className="h-[90vh] flex justify-center my-20 items-center">
      <div id="error-page">
        <img className="w-3/4" src={image} alt="" />
        <p className="text-center text-4xl md:text-7xl mt-4">404</p>

        <p className="text-center">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={handleBack}
          className="btn bg-yellow-500 hover:bg-yellow-600 block mx-auto text-white"
        >
          back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
