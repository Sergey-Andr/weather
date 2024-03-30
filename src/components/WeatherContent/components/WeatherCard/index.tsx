import { FC, memo, ReactElement } from "react";
import {
    selectActiveDay,
    useSetDaysActions,
} from "@/components/WeatherContent/store/useDaysValue.ts";
import { IWeatherDay } from "@/services/weatherForecast.ts";
import RoundedBottom from "@/components/WeatherContent/components/WeatherCard/components/RoundedBottom";
import RightColumn from "@/components/WeatherContent/components/WeatherCard/components/RightColumn";
import LeftColumn from "@/components/WeatherContent/components/WeatherCard/components/LeftColumn";

interface IWeatherCard {
    day: IWeatherDay;
}

const WeatherCard: FC<IWeatherCard> = ({ day }): ReactElement => {
    const activeDay = selectActiveDay();
    const { setActiveDay } = useSetDaysActions();

    return (
        <div
            onClick={() => {
                setActiveDay(day.dt_txt.slice(8, 10));
            }}
            className={`
        w-[180px] h-[120px] mr-2 last:mr-0 relative border-skeleton border-2 border-b-0
        bg-subDefault py-2 px-5 rounded-t text-white flex items-center justify-between
         ${activeDay === day.dt_txt.slice(8, 10) ? " top-1 mt-[-5px] h-[125px]" : ""}
        `}
        >
            <LeftColumn
                dtTxt={day.dt_txt}
                minTemp={day.minTemperature}
                description={day.weather[0].description}
                icon={day.weather[0].icon}
            />
            <RightColumn dtTxt={day.dt_txt} maxTemp={day.maxTemperature} />
            <RoundedBottom dtTxt={day.dt_txt} />
        </div>
    );
};

export default memo(WeatherCard);
