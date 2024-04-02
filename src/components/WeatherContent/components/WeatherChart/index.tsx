import { memo, ReactElement } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayDataStore.ts";
import { options } from "@/components/WeatherContent/components/WeatherChart/feature";
import { selectSettingsTemperature } from "@/store/settingsStore.ts";
import { selectTheme } from "@/store/themeStore.ts";

const WeatherChart = (): ReactElement => {
    const activeDayData = selectActiveDayData();
    const theme = selectTheme();
    const temperature = selectSettingsTemperature();
    const time = activeDayData.map((el) => el.dt_txt.slice(11, 16));
    const temps = activeDayData.map((el) => Math.floor(el.main.temp));
    return (
        <div className="w-full h-60">
            <p
                className={`${theme === "dark" ? "text-white" : "text-black"} text-lg font-medium mb-4`}
            >
                Temperature
            </p>
            <HighchartsReact
                highcharts={Highcharts}
                options={options({
                    charts: temps,
                    customCategories: time,
                    color: "#b5dce1",
                    temp: temperature,
                    theme: theme,
                })}
            />
        </div>
    );
};

export default memo(WeatherChart);
