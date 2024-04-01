import { memo, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { selectTheme } from "@/store/themeStore.ts";

const SubHeader = (): ReactElement => {
    const theme = selectTheme();
    const { pathname } = useLocation();
    return (
        <div
            className={`w-[800px] h-12 flex items-center mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
            <div className="w-[160px] h-12 relative flex items-center left-[calc(100%-160px)]">
                <motion.div
                    className={`absolute top-[0.35rem] bg-subDefaultBrightMode  h-10 w-24 rounded-full`}
                    initial={{
                        translateX: pathname !== "/" ? "-1.2rem" : "4.65rem",
                    }}
                    animate={{
                        translateX: pathname === "/" ? "-1.2rem" : "4.65rem",
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                />

                <Link to={"/"} className={`absolute top-1/4 left-0`}>
                    <p
                        className={`${pathname === "/" ? "text-black font-semibold" : theme === "dark" ? "text-white" : "text-black"}`}
                    >
                        Forecast
                    </p>
                </Link>
                <Link to={"/more_info"} className={`absolute top-1/4 right-0`}>
                    <p
                        className={`${pathname === "/more_info" ? "text-black font-semibold" : theme === "dark" ? "text-white" : "text-black"}`}
                    >
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default memo(SubHeader);
