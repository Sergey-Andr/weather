import { memo, ReactElement } from "react";
import SurfaceInfo from "@/components/ActiveDayInfo/components/Header/components/SurfaceInfo";
import Details from "@/components/ActiveDayInfo/components/Header/components/Defatils";

const Header = (): ReactElement => {
    return (
        <div className="w-full h-48 bg-subDefault text-white flex">
            <SurfaceInfo />
            <Details />
        </div>
    );
};

export default memo(Header);
