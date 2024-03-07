import { Outlet } from "react-router";
import Sidebar from "../../Components/Shared/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
    return (
        <div className="lg:grid grid-cols-12 gap-10 max-w-screen-2xl mx-auto">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="col-span-3 w-[232px] bg-white">
                <Sidebar></Sidebar>
            </div>
            <div className="min-h-screen col-span-9 pt-20 lg:pt-0">
                <div className="min-h-screen pt-[5vh]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;