import { memo, ReactElement } from "react";
import { Progress } from "@/components/ui/progress.tsx";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayDataStore.ts";
import { findDiffDays } from "@/components/ActiveDayInfo/components/Header/components/Defatils/feature";

const MIN_TEMP = -40;
const MAX_TEMP = 40;

const Thermometer = (): ReactElement => {
    const activeDayData = selectActiveDayData();

    const activeDay = findDiffDays(activeDayData);
    const multiplier = activeDay
        ? Math.floor(activeDayData[0].max)
        : Math.floor(activeDayData[0].main.temp);

    const progressTemperature =
        ((multiplier - MIN_TEMP) / (MAX_TEMP - MIN_TEMP)) * 100;

    return (
        <div className="relative w-[55px] h-[120px]">
            <div className="flex flex-col items-end text-white absolute top-0 left-5">
                <p>40 -</p>
                <p>20 -</p>
                <p>0 -</p>
                <p>-20 -</p>
                <p>-40 -</p>
            </div>
            <div className="rotate-[270deg] w-[115px] h-2.5 rounded-2xl bg-white flex items-center absolute top-14">
                <div className="w-4 h-4 rounded-full bg-white flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-600  shadow-inner shadow-black" />
                </div>
                <Progress
                    value={progressTemperature}
                    className="w-28 h-2 rounded-2xl relative left-[-5px]"
                />
            </div>
        </div>
    );
};

export default memo(Thermometer);
