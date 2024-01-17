import deliveryTruck from "../../../../public/images/deliveryTruck.png"

const Steps = () => {
    return (
        <div className="h-72 border bg-[url('../../../../public/images/city.jpg')] flex justify-between items-center ">
            
                <div>
                    <h1>ok</h1>
                </div>
                <div>
                    <img src={deliveryTruck} alt="" className="mt-11"/>
                </div>
            
        </div>
    );
};

export default Steps;