import { memo, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SubHeader = (): ReactElement => {
    const { pathname } = useLocation();
    return (
        <div className={`w-[800px] h-12 flex items-center mb-4`}>
            <div className="w-[160px] h-12 relative flex items-center left-[calc(100%-160px)]">
                <motion.div
                    className={`absolute top-[0.35rem] bg-brightSubDefault h-10 w-24 rounded-full`}
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

                <Link
                    to={"/"}
                    className={`absolute top-1/4 left-0 ${pathname === "/" ? "text-subDefault font-semibold" : "text-white"}`}
                >
                    <motion.p
                        initial={{
                            color: pathname !== "/" ? "#1b1b1d" : "#fff",
                            fontWeight: pathname !== "/" ? "600" : "500",
                        }}
                        animate={{
                            color: pathname === "/" ? "#1b1b1d" : "#fff",
                            fontWeight: pathname === "/" ? "600" : "500",
                        }}
                    >
                        Forecast
                    </motion.p>
                </Link>
                <Link
                    to={"/more_info"}
                    className={`absolute top-1/4 right-0 ${pathname === "/more_info" ? "text-subDefault font-semibold" : "text-white"}`}
                >
                    <motion.p
                        initial={{
                            color:
                                pathname !== "/more_info" ? "#1b1b1d" : "#fff",
                            fontWeight:
                                pathname !== "/more_info" ? "600" : "500",
                        }}
                        animate={{
                            color:
                                pathname === "/more_info" ? "#1b1b1d" : "#fff",
                            fontWeight:
                                pathname === "/more_info" ? "600" : "500",
                        }}
                    >
                        More Info
                    </motion.p>
                </Link>
            </div>
        </div>
    );
};

export default memo(SubHeader);
