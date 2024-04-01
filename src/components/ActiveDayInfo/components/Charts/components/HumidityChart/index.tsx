import { memo, ReactElement } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import {
    options,
    prepareData,
    TWeatherData,
} from "@/components/ActiveDayInfo/feature";
import { selectTheme } from "@/store/themeStore.ts";

const Humidity = (): ReactElement => {
    const theme = selectTheme();
    const activeDayData = selectActiveDayData();
    const { weatherValues, time } = prepareData({
        data: activeDayData,
        key: "humidity",
    }) as TWeatherData;

    return (
        <div className="text-white">
            <HighchartsReact
                highcharts={Highcharts}
                options={options({
                    charts: weatherValues,
                    name: "Humidity %",
                    customCategories: time,
                    color: "#15803D",
                    theme: theme,
                })}
            />
        </div>
    );
};

export default memo(Humidity);
