import { memo, ReactElement } from "react";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchCity from "@/components/Header/components/SearchCity";

const Header = (): ReactElement => {
    return (
        <div className="pt-4 mb-4 flex items-center justify-between">
            <div className="flex items-center">
                <Link to={"/"}>
                    <img
                        src="../../../public/logo.svg"
                        alt="logo"
                        className="w-[220px] h-[60px] mr-8"
                    />
                </Link>
                <SearchCity />
            </div>
            <div className="text-slate-50 flex items-center cursor-pointer hover:text-slate-300">
                <p className="mr-2">Settings</p>
                <FaGear />
            </div>
        </div>
    );
};

export default memo(Header);
