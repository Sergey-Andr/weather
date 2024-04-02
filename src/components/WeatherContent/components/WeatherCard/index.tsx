import { FC, memo, ReactElement } from "react";
import { IWeatherDay } from "@/services/weatherForecast.ts";
import {
    selectActiveDay,
    useSetDaysActions,
} from "@/components/WeatherContent/store/useDaysValueStore.ts";
import Passive from "@/components/WeatherContent/components/WeatherCard/components/Passive";
import Active from "@/components/WeatherContent/components/WeatherCard/components/Active";
import { selectTheme } from "@/store/themeStore.ts";

interface IWeatherCard {
    day: IWeatherDay;
}

const WeatherCard: FC<IWeatherCard> = ({ day }): ReactElement => {
    const theme = selectTheme();
    const { setActiveDay } = useSetDaysActions();
    const activeDay = selectActiveDay();

    return (
        <div
            className={`${day.dt_txt.slice(8, 10) === activeDay ? "w-72" : "w-20"} h-full transition-all duration-500 overflow-hidden`}
        >
            {day.dt_txt.slice(8, 10) !== activeDay ? (
                <div
                    className={`flex flex-col items-center justify-between w-full h-full  ${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} rounded-3xl py-3 cursor-pointer`}
                    onClick={() => {
                        setActiveDay(day.dt_txt.slice(8, 10));
                    }}
                >
                    <Passive day={day} />
                </div>
            ) : (
                <div className={`h-full`}>
                    <Active day={day} />
                </div>
            )}
        </div>
    );
};

export default memo(WeatherCard);
