import { memo, ReactElement } from "react";
import * as logo from "@/../public/logo.svg";
import SearchCity from "@/components/Header/components/SearchCity";
import SwitchThemeMode from "@/components/Header/components/SwitchThemeMode";
import { selectSearchedCity } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";
import { HiLocationMarker } from "react-icons/hi";
import { selectTheme } from "@/store/themeStore.ts";
import Settings from "@/components/Header/components/Settings";

const Header = (): ReactElement => {
    const searchedCity = selectSearchedCity();
    const theme = selectTheme();
    return (
        <div className="pt-4 mb-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src={logo.default} alt="logo" className="w-[220px] mr-8" />

                <div
                    className={`w-40 h-10 px-4 mr-16 ${theme === "dark" ? "bg-subDefault text-white" : "bg-subDefaultBrightMode text-black"} rounded-full flex items-center justify-center`}
                >
                    <HiLocationMarker
                        className={`w-5 h-5 mr-2 ${theme === "dark" ? "fill-white" : "fill-textBrightMode"}`}
                    />
                    <p className="flex font-semibold">
                        {searchedCity.split(",")[0]}
                        <span className="font-normal">
                            ,{searchedCity.split(",")[1]}
                        </span>
                    </p>
                </div>
                <SearchCity />
            </div>
            <div className="flex items-center">
                <SwitchThemeMode />
                <Settings />
            </div>
        </div>
    );
};

export default memo(Header);
