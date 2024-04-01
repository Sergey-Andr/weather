import { FC, memo, ReactElement } from "react";
import { IWeatherDay } from "@/services/weatherForecast.ts";
import {
    selectActiveDay,
    useSetDaysActions,
} from "@/components/WeatherContent/store/useDaysValue.ts";
import Passive from "@/components/WeatherContent/components/WeatherCard/components/Passive";
import Active from "@/components/WeatherContent/components/WeatherCard/components/Active";

interface IWeatherCard {
    day: IWeatherDay;
}

const WeatherCard: FC<IWeatherCard> = ({ day }): ReactElement => {
    const { setActiveDay } = useSetDaysActions();
    const activeDay = selectActiveDay();

    return (
        <div
            className={`${day.dt_txt.slice(8, 10) === activeDay ? "w-[285px]" : "w-[80px]"} h-full  transition-all duration-500 overflow-hidden`}
        >
            {day.dt_txt.slice(8, 10) !== activeDay ? (
                <div
                    className={`flex flex-col items-center justify-between w-full h-full bg-subDefault rounded-3xl py-3 cursor-pointer transition-all duration-1000`}
                    onClick={() => {
                        setActiveDay(day.dt_txt.slice(8, 10));
                    }}
                >
                    <Passive day={day} />
                </div>
            ) : (
                <div className={`h-full transition-all duration-1000`}>
                    <Active day={day} />
                </div>
            )}
        </div>
    );
};

export default memo(WeatherCard);
