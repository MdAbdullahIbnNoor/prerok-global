import loadingAnimation from '../../../assets/animations/loadingAnimation.json';
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <div className='w-72'>
                <Lottie animationData={loadingAnimation} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Loading;