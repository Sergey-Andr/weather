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

const Temperature = (): ReactElement => {
    const theme = selectTheme();
    const activeDayData = selectActiveDayData();
    const { weatherValues, time } = prepareData({
        data: activeDayData,
        key: "temp",
    }) as TWeatherData;

    return (
        <div className="text-white mb-8">
            <HighchartsReact
                highcharts={Highcharts}
                options={options({
                    charts: weatherValues,
                    name: "Temperature",
                    customCategories: time,
                    color: "#B91C1C",
                    theme: theme,
                })}
            />
        </div>
    );
};

export default memo(Temperature);
