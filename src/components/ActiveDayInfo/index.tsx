import { memo, ReactElement } from "react";
import ActiveDayCharts from "@/components/ActiveDayInfo/components/Charts";
import Header from "@/components/ActiveDayInfo/components/Header";
import { selectActiveDay } from "@/components/WeatherContent/store/useDaysValue.ts";
import { selectSearchedCity } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";
import { useSetActiveDayDataActions } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { useWeatherForecastQuery } from "@/services/weatherForecast.ts";
import Loader from "@/components/WeatherContent/components/Loader";
import { selectSettingsTemperature } from "@/store/settingsStore.ts";

const ActiveDayInfo = (): ReactElement => {
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
        <>
            <Header />
            <ActiveDayCharts />
        </>
    );
};

export default memo(ActiveDayInfo);
