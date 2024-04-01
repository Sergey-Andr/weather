import { memo, ReactElement } from "react";
import { IoManOutline } from "react-icons/io5";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayDataStore.ts";
import { findDiffDays } from "@/components/ActiveDayInfo/components/Header/components/Defatils/feature";
import { selectSettingsTemperature } from "@/store/settingsStore.ts";
import { selectTheme } from "@/store/themeStore.ts";

const Temperature = (): ReactElement => {
    const activeDayData = selectActiveDayData();
    const temperature = selectSettingsTemperature();
    const theme = selectTheme();

    const differenceInDays = findDiffDays(activeDayData);

    const temp = differenceInDays
        ? activeDayData[0].max
        : activeDayData[0].main.temp;

    const feelsLike = differenceInDays
        ? activeDayData[0].max
        : activeDayData[0].main.feels_like;

    return (
        <div className="flex-col">
            <div className="flex-col mb-4">
                <p className={`text-xl`}>
                    {differenceInDays ? `In ${differenceInDays} days` : `Now`}
                </p>
                <p className="text-3xl font-bold">
                    {temp ? "+" : "-"}
                    {Math.floor(temp)}°
                    <span className="font-normal">{temperature}</span>
                </p>
            </div>
            <div className="flex max-w-[120px] mr-6">
                <IoManOutline
                    className={`w-10 h-10 ${theme === "dark" ? "stroke-white" : "stroke-black"}`}
                />
                <div className="flex-col text-lg leading-6">
                    <p>Feels like</p>
                    <p>
                        {feelsLike ? "+" : "-"}
                        {Math.floor(feelsLike)}°
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(Temperature);
