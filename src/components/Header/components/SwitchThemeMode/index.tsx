import { FaMoon, FaRegSun } from "react-icons/fa6";
import { selectTheme, useSetThemeActions } from "@/store/themeStore.ts";
import { memo, ReactElement } from "react";

const SwitchThemeMode = (): ReactElement => {
    const theme = selectTheme();
    const { setTheme } = useSetThemeActions();
    return (
        <div
            className={`w-20 h-9 mr-6 relative rounded-full border-2
                ${theme === "dark" ? "bg-subDefault border-skeleton" : "bg-subDefaultBrightMode border-skeletonBrightMode"}
                `}
        >
            <div
                className={`absolute ${theme === "bright" ? "translate-x-[0.11rem]" : "translate-x-[2.4rem]"}  duration-500 transition-all bg-brightSubDefault h-9 w-9 top-[-0.1rem] rounded-full`}
            />
            <button
                className={`absolute top-[-0.1rem] left-0.5 w-9 h-9 rounded-full flex items-center justify-center transition-all
                     ${theme === "bright" ? "" : "text-brightSubDefault"}`}
                onClick={() => {
                    setTheme("bright");
                }}
            >
                <FaRegSun className="w-6 h-6" />
            </button>
            <button
                className={`absolute right-0.5 w-9 h-9 rounded-full flex items-center justify-center transition-all
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
