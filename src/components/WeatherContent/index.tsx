import { memo, ReactElement } from "react";
import { useWeatherForecastQuery } from "@/services/weatherForecast.ts";
import { selectActiveDay } from "@/components/WeatherContent/store/useDaysValue.ts";
import Loader from "@/components/WeatherContent/components/Loader";
import { useSetActiveDayDataActions } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { selectSearchedCity } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";
import WeatherCard from "@/components/WeatherContent/components/WeatherCard";
import WeatherMap from "@/components/WeatherContent/components/WeatherMap";
import WeatherChart from "@/components/WeatherContent/components/WeatherChart";
import { selectSettingsTemperature } from "@/store/settingsStore.ts";

const WeatherContent = (): ReactElement => {
    const activeDay = selectActiveDay();
    const searchedCity = selectSearchedCity();
    const { setActiveDayData } = useSetActiveDayDataActions();
    const temperature = selectSettingsTemperature();

    const { data, isLoading } = useWeatherForecastQuery({
        name: searchedCity.split(",")[0],
        units: temperature === "C" ? "metric" : "standart",
        activeDay: activeDay,
    });

    if (!data) {
        return isLoading ? <Loader /> : <Loader noData={true} />;
    }
    const { weather } = data;
    setActiveDayData(weather.activeDayData);

    return (
        <div>
            <div className="flex justify-between w-full h-[245px] mb-8">
                <div className="flex justify-between min-w-[800px] mr-4">
                    {weather.currentSixDays.map((day) => (
                        <WeatherCard key={day.dt} day={day} />
                    ))}
                </div>
                <WeatherChart />
            </div>
            <div className="w-full h-fit">
                <WeatherMap />
            </div>
        </div>
    );
};

export default memo(WeatherContent);
