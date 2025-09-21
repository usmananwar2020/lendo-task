import { Outlet } from "react-router-dom";
import LeftSideSection from "./leftSideSection";
import TopNavigationBar from "./topNavigationBar";

const ShellContainer = () => {

    return (
        <>
            <div className="flex h-screen">
                <div className="w-[25vw] border-r border-r-gray-300"><LeftSideSection /></div>
                <div  className="w-[75vw]">
                    <div className="h-20">
                        <TopNavigationBar />
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default ShellContainer;
