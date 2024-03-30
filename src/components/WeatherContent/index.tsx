import { memo, ReactElement, useCallback } from "react";
import { useWeatherForecastQuery } from "@/services/weatherForecast.ts";
import WeatherCard from "@/components/WeatherContent/components/WeatherCard";
import moment from "moment/moment";
import {
    selectActiveDay,
    selectDaysValue,
    useSetDaysActions,
} from "@/components/WeatherContent/store/useDaysValue.ts";
import { useDailyEvent } from "@daily-co/daily-react";
import WeatherActiveDayData from "@/components/WeatherContent/components/WeatherCard/components/WeatherActiveDayData";
import Loader from "@/components/WeatherContent/components/Loader";
import { useSetActiveDayDataActions } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { selectSearchedCity } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";

const WeatherContent = (): ReactElement => {
    const daysValue = selectDaysValue();
    const activeDay = selectActiveDay();
    const searchedCity = selectSearchedCity();
    const { setActiveDay } = useSetDaysActions();
    const { setActiveDayData } = useSetActiveDayDataActions();

    useDailyEvent(
        "joined-meeting",
        useCallback(() => {
            setActiveDay(moment().add(1, "days").format("dd"));
        }, []),
    );

    const days = [];
    for (let i = 0; i < daysValue; i++)
        days.push(moment().add(i, "day").format("DD"));

    const { data, isLoading } = useWeatherForecastQuery({
        name: searchedCity,
        lang: "en",
        activeDay: activeDay,
    });

    if (!data) {
        return isLoading ? <Loader /> : <Loader noData={true} />;
    }
    const { weather } = data;
    setActiveDayData(weather.activeDayData);

    return (
        <div>
            <div className="flex">
                {weather.currentSixDays.map((day) => (
                    <WeatherCard key={day.dt} day={day} />
                ))}
            </div>
            <div className="w-full border-skeleton border-2 h-fit">
                <WeatherActiveDayData />
            </div>
        </div>
    );
};

export default memo(WeatherContent);
