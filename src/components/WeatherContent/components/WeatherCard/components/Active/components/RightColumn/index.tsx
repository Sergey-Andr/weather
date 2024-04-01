import { FC, ReactElement } from "react";
import { weatherIcon } from "@/features/weatherIcon.ts";
import { FaArrowUp } from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";

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
    return (
        <div>
            <Tooltip>
                <TooltipTrigger>
                    <img
                        src={weatherIcon(icon)}
                        alt="weather icon"
                        className="w-24 h-24 relative top-[-1rem] mb-2"
                    />
                </TooltipTrigger>
                <TooltipContent className="bg-subDefault text-white border-none">
                    {description}
                </TooltipContent>
            </Tooltip>
            <div className="mb-2 text-md flex items-end">
                Wind
                <p className="text-sm text-edgeCalendarDays ml-1">speed:</p>
                <span className="font-semibold">
                    {"\u00A0" + Math.floor(windSpeed)}
                </span>
            </div>
            <div className="text-md flex items-end">
                Wind
                <p className="text-sm text-edgeCalendarDays ml-1">
                    deg:{"\u00A0"}
                </p>
                <span className="font-semibold">
                    <FaArrowUp
                        style={{
                            rotate: `${windDeg}deg`,
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default RightColumn;
