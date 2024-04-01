import { FC, memo, ReactElement } from "react";
import { weatherIcon } from "@/features/weatherIcon.ts";
import moment from "moment";
import { IWeatherDay } from "@/services/weatherForecast.ts";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { selectTheme } from "@/store/themeStore.ts";

interface IPassive {
    day: IWeatherDay;
}

const Passive: FC<IPassive> = ({ day }): ReactElement => {
    const theme = selectTheme();
    const dayWeek = moment(day.dt_txt).format("ddd");

    return (
        <>
            <div className="flex flex-col items-center">
                <p
                    className={`${theme === "dark" ? "text-white" : "text-black"} font-semibold border-b-2 ${theme === "dark" ? "border-skeleton" : "border-white"}  pb-4 text-2xl mb-4`}
                >
                    {dayWeek}
                </p>
                <Tooltip>
                    <TooltipTrigger>
                        <img
                            src={weatherIcon(day.weather[0].icon)}
                            alt="weather icon"
                            className="w-20 relative top-[-1rem] mb-2"
                        />
                    </TooltipTrigger>
                    <TooltipContent
                        className={`${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} ${theme === "dark" ? "text-white" : "text-black"} font-medium border-none`}
                    >
                        {day.weather[0].description}
                    </TooltipContent>
                </Tooltip>
            </div>
            <p
                className={`text-2xl font-semibold relative top-[-1rem] ${theme === "dark" ? "text-white" : "text-black"}`}
            >
                {day.maxTemperature ? "+" : "-"}
                {Math.floor(day.maxTemperature)}°
            </p>
        </>
    );
};

export default memo(Passive);
