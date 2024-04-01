import { memo, ReactElement } from "react";
import { weatherIcon } from "@/features/weatherIcon.ts";
import Thermometer from "@/components/ActiveDayInfo/components/Header/components/Defatils/components/Thermometer";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayDataStore.ts";
import Temperature from "@/components/ActiveDayInfo/components/Header/components/Defatils/components/Temperature";
import Description from "@/components/ActiveDayInfo/components/Header/components/Defatils/components/Description";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { selectTheme } from "@/store/themeStore.ts";

const Details = (): ReactElement => {
    const theme = selectTheme();
    const activeDayData = selectActiveDayData();
    return (
        <div className="flex w-full justify-around items-center">
            <div className="flex items-center">
                <Tooltip>
                    <div className="rounded-full w-40 h-40 bg-circle to-transparent flex items-center justify-center">
                        <TooltipTrigger>
                            <img
                                src={weatherIcon(
                                    activeDayData[0].weather[0].icon,
                                )}
                                alt="weather icon"
                                className="w-28 h-28"
                            />
                        </TooltipTrigger>
                    </div>
                    <TooltipContent
                        className={`${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} text-md border-skeleton`}
                    >
                        {activeDayData[0].weather[0].main}
                    </TooltipContent>
                </Tooltip>
                <Thermometer />
            </div>
            <Temperature />
            <Description />
        </div>
    );
};

export default memo(Details);
