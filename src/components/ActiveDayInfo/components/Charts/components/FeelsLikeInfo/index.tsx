import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { memo, ReactElement } from "react";
import { prepareData, TWeatherData } from "@/components/ActiveDayInfo/feature";

const FeelsLike = (): ReactElement => {
    const activeDayData = selectActiveDayData();
    const { weatherValues } = prepareData({
        data: activeDayData,
        key: "feels_like",
    }) as TWeatherData;

    return (
        <div className={"w-fit ml-10 mb-8"}>
            <div className="w-[1070px] h-14 bg-subDefault text-white flex justify-around mb-4">
                {weatherValues.map((el, i) => (
                    <div
                        key={`${el}_${i}`}
                        className="flex flex-col justify-center items-center w-16 border-x-2 border-skeleton"
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
