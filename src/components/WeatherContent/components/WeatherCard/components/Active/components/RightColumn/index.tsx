import { FC, ReactElement } from "react";
import { weatherIcon } from "@/features/weatherIcon.ts";
import { FaArrowUp } from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { selectTheme } from "@/store/themeStore.ts";

interface IRightColumn {
    icon: string;
    windSpeed: number;
    windDeg: number;
    description: string;
}

const RightColumn: FC<IRightColumn> = ({
    icon,
    windSpeed,
    windDeg,
    description,
}): ReactElement => {
    const theme = selectTheme();
    return (
        <div className="text-subText">
            <Tooltip>
                <TooltipTrigger>
                    <img
                        src={weatherIcon(icon)}
                        alt="weather icon"
                        className="w-24 h-24 relative top-[-1rem] mb-2"
                    />
                </TooltipTrigger>
                <TooltipContent
                    className={`${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} text-white border-none`}
                >
                    {description}
                </TooltipContent>
            </Tooltip>
            <div className="mb-2 text-md flex items-end">
                Wind
                <p className="text-sm ml-1">speed:</p>
                <span className="font-semibold text-black">
                    {"\u00A0" + Math.floor(windSpeed)}
                </span>
            </div>
            <div className="text-md flex items-end">
                Wind
                <p className="text-sm ml-1">deg:{"\u00A0"}</p>
                <span className="font-semibold">
                    <FaArrowUp
                        style={{
                            color: "black",
                            rotate: `${windDeg}deg`,
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default RightColumn;
