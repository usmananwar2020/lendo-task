import { Outlet } from "react-router-dom";
import LeftSideSection from "./leftSideSection";
import TopNavigationBar from "./topNavigationBar";

const ShellContainer = () => {

    return (
        <>
            <div className="flex lg:flex-row flex-col h-screen">
                <div className="lg:w-[25vw] lg:border-r lg:border-r-gray-300 lg:border-b-0 border-b border-b-gray-300"><LeftSideSection /></div>
                <div className="lg:w-[75vw]">
                    <div className="h-20 lg:block hidden">
                        <TopNavigationBar />
                    </div>
                    <div className="lg:h-[calc(100vh-80px)] lg:overflow-y-auto">
                        <Outlet />
                    </div>
                    <div className="h-20 block lg:hidden sticky bottom-0 bg-white rounded-t-3xl border-t border-t-gray-300">
                        <TopNavigationBar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShellContainer;
