// import Stepper from "../Stepper/Stepper";
import delivery from '../../assets/animations/delivery.gif';
const Processing = () => {

    return (
        <div className='mx-52 my-36'>
            <h1 className='text-4xl mb-4 font-bold'>Your delivery is on the way.....</h1>
            <img src={delivery} className="w-96" />
        </div>
    );
};

export default Processing;