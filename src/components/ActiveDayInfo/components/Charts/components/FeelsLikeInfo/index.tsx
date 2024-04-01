import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { memo, ReactElement } from "react";
import { prepareData, TWeatherData } from "@/components/ActiveDayInfo/feature";
import { selectTheme } from "@/store/themeStore.ts";

const FeelsLike = (): ReactElement => {
    const theme = selectTheme();
    const activeDayData = selectActiveDayData();
    const { weatherValues } = prepareData({
        data: activeDayData,
        key: "feels_like",
    }) as TWeatherData;

    return (
        <div className={"w-fit ml-10 mb-8"}>
            <div
                className={`w-[1070px] h-14 ${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} text-white flex justify-around mb-4`}
            >
                {weatherValues.map((el, i) => (
                    <div
                        key={`${el}_${i}`}
                        className={`flex flex-col justify-center items-center w-16 border-x-2 
                        ${theme === "dark" ? "border-skeleton text-white" : "border-white text-black font-medium"}`}
                    >
                        <p className="mb-2">{el ? "+" + el : "-" + el}°</p>
                    </div>
                ))}
            </div>
            <p className="text-center text-tableBorder tracking-wide">
                Feels like
            </p>
        </div>
    );
};

export default memo(FeelsLike);
