import { Outlet } from "react-router";
import Sidebar from "../../Components/Shared/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="md:grid grid-cols-12  max-w-screen-2xl mx-auto">
            <div className="col-span-2">
                <Sidebar></Sidebar>
            </div>
            <div className="min-h-screen col-span-10">
                <div className="min-h-screen pt-[5vh]">
                    <Outlet></Outlet>
                </div>
                <div className="min-h-screen"></div>
            </div>
        </div>
    );
};

export default Dashboard;