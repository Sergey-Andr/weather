import { FaMoon, FaRegSun } from "react-icons/fa6";
import { selectTheme, useSetThemeActions } from "@/store/themeStore.ts";
import { memo, ReactElement } from "react";

const SwitchThemeMode = (): ReactElement => {
    const theme = selectTheme();
    const { setTheme } = useSetThemeActions();
    return (
        <div className="w-[80px] h-[40px] mr-6 relative bg-subDefault rounded-full">
            <div
                className={`absolute ${theme === "bright" ? "translate-x-[0.11rem]" : "translate-x-[2.6rem]"}  duration-500 transition-all top-0.5 bg-brightSubDefault h-9 w-9 rounded-full`}
            />
            <button
                className={`absolute  top-0.5 left-0.5 w-9 h-9 rounded-full flex items-center justify-center transition-all
                     ${theme === "bright" ? "" : "text-brightSubDefault"}`}
                onClick={() => {
                    setTheme("bright");
                }}
            >
                <FaRegSun className="w-6 h-6" />
            </button>
            <button
                className={`absolute top-1 right-0.5 w-9 h-9 rounded-full flex items-center justify-center transition-all
                    ${theme === "dark" ? "" : "text-brightSubDefault"}
                    `}
                onClick={() => {
                    setTheme("dark");
                }}
            >
                <FaMoon className="w-7 h-7 rotate-[220deg]" />
            </button>
        </div>
    );
};

export default memo(SwitchThemeMode);
