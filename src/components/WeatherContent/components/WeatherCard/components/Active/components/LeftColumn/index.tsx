import { FC, ReactElement } from "react";
import moment from "moment/moment";
import { selectSettingsTemperature } from "@/store/settingsStore.ts";

interface ILeftColumn {
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    dtTxt: string;
    maxTemp: number;
}

const LeftColumn: FC<ILeftColumn> = ({
    temp,
    feelsLike,
    pressure,
    humidity,
    dtTxt,
    maxTemp,
}): ReactElement => {
    const temperature = selectSettingsTemperature();
    const currentDay = moment().format("YYYY-MM-DD");
    const isCurrentDay = currentDay === dtTxt.slice(0, 9);
    return (
        <div>
            <p className="text-5xl font-semibold mb-6">
                {temp ? "+" : "-"}
                {Math.floor(isCurrentDay ? temp : maxTemp)}°
                <span className="font-normal">{temperature}</span>
            </p>
            <p className="mb-2 text-md">
                Feels like: {feelsLike ? "+" : "-"}
                <span className="font-semibold">
                    {Math.floor(isCurrentDay ? feelsLike : maxTemp)}°
                </span>
            </p>
            <p className="mb-2 text-md">
                Pressure:
                <span className="font-semibold">
                    {"\u00A0" + Math.floor(pressure)}
                </span>
            </p>
            <p className="text-md">
                Humidity:
                <span className="font-semibold">
                    {"\u00A0" + Math.floor(humidity)}%
                </span>
            </p>
        </div>
    );
};

export default LeftColumn;
