import { memo, ReactElement } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import {
    options,
    prepareData,
    TWeatherData,
} from "@/components/ActiveDayInfo/feature";

const Pressure = (): ReactElement => {
    const activeDayData = selectActiveDayData();
    const { weatherValues, time } = prepareData({
        data: activeDayData,
        key: "pressure",
    }) as TWeatherData;

    return (
        <div className="text-white mb-8">
            <HighchartsReact
                highcharts={Highcharts}
                options={options({
                    charts: weatherValues,
                    name: "Pressure mm",
                    customCategories: time,
                    color: "#b97d1c",
                })}
            />
        </div>
    );
};

export default memo(Pressure);
