import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { FaArrowUp } from "react-icons/fa6";
import { memo, ReactElement } from "react";
import { prepareData, TWindData } from "@/components/ActiveDayInfo/feature";
import { selectTheme } from "@/store/themeStore.ts";

const Wind = (): ReactElement => {
    const theme = selectTheme();
    const activeDayData = selectActiveDayData();
    const wind = prepareData({
        data: activeDayData,
        key: "wind",
    }) as TWindData;

    return (
        <div className={"w-fit ml-10 mb-8"}>
            <div
                className={`w-[1070px] h-14 ${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} text-white flex justify-around mb-4`}
            >
                {wind.map((el, i) => (
                    <div
                        key={`${el.windDeg}_${i}`}
                        className={`flex flex-col justify-center items-center w-12 border-x-2 
                        ${theme === "dark" ? "border-skeleton text-white" : "border-white text-black font-medium"}`}
                    >
                        <p className="mb-2">{el.windSpeed}</p>
                        <FaArrowUp
                            className="w-5 h-5"
                            style={{ rotate: `${el.windDeg}deg` }}
                        />
                    </div>
                ))}
            </div>
            <p className="text-center text-tableBorder tracking-wide">Wind</p>
        </div>
    );
};

export default memo(Wind);
