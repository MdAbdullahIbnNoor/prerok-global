

/* eslint-disable react/prop-types */


const Title = ({children}) => {
    return (
        <div className="relative  border-gray-700 ps-3 ">
            <h2 className=" text-gray-700 text-3xl drop-shadow-xl font-bold">{children}</h2>
            <p className="absolute left-[10%] bottom-0 text-3xl md:text-6xl font-extrabold -z-10 opacity-5">{children}</p>
        </div>
    );
};

export default Title;