import { memo, ReactElement } from "react";
import SurfaceInfo from "@/components/ActiveDayInfo/components/Header/components/SurfaceInfo";
import Details from "@/components/ActiveDayInfo/components/Header/components/Defatils";
import { selectTheme } from "@/store/themeStore.ts";

const Header = (): ReactElement => {
    const theme = selectTheme();
    return (
        <div
            className={`w-full h-48 ${theme === "dark" ? "bg-subDefault text-white" : "bg-subDefaultBrightMode text-black"} flex`}
        >
            <SurfaceInfo />
            <Details />
        </div>
    );
};

export default memo(Header);
