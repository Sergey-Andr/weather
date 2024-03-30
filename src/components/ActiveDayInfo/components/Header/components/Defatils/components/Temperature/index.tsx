import { memo, ReactElement } from "react";
import { IoManOutline } from "react-icons/io5";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import {
    findFeelsLike,
    findMaxTemp,
} from "@/components/ActiveDayInfo/components/Header/components/Defatils/components/Temperature/feature";
import { findDiffDays } from "@/components/ActiveDayInfo/components/Header/components/Defatils/feature";

const Temperature = (): ReactElement => {
    const activeDayData = selectActiveDayData();

    const differenceInDays = findDiffDays(activeDayData);
    const maxTemp = findMaxTemp({
        diff: differenceInDays,
        activeDay: activeDayData,
    });
    const feelsLike = findFeelsLike({
        diff: differenceInDays,
        activeDay: activeDayData,
    });

    return (
        <div className="flex-col">
            <div className="flex-col mb-4">
                <p className="text-xl text-white">
                    {differenceInDays ? `In ${differenceInDays} days` : `Now`}
                </p>
                <p className="text-3xl font-bold">{maxTemp}</p>
            </div>
            <div className="flex max-w-[120px] mr-6">
                <IoManOutline className="w-10 h-10 stroke-white" />
                <div className="flex-col text-lg leading-5">
                    <p>Feels like</p>
                    <p>{feelsLike}</p>
                </div>
            </div>
        </div>
    );
};

export default memo(Temperature);
