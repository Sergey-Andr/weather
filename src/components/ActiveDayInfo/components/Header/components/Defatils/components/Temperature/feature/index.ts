import { IActiveDayWeatherData } from "@/services/weatherForecast.ts";

export const findMaxTemp = ({
    diff,
    activeDay,
}: {
    diff: number;
    activeDay: IActiveDayWeatherData[];
}) => {
    return diff
        ? activeDay[0].max
            ? "+" + Math.floor(activeDay[0].max) + "°"
            : "-" + Math.floor(activeDay[0].max) + "°"
        : activeDay[0].main.temp
          ? "+" + Math.floor(activeDay[0].main.temp) + "°"
          : "-" + Math.floor(activeDay[0].main.temp) + "°";
};

export const findFeelsLike = ({
    diff,
    activeDay,
}: {
    diff: number;
    activeDay: IActiveDayWeatherData[];
}) => {
    return diff
        ? activeDay[0].max
            ? "+" + Math.floor(activeDay[0].max)
            : "-" + Math.floor(activeDay[0].max)
        : activeDay[0].main.feels_like
          ? "+" + Math.floor(activeDay[0].main.feels_like) + "°"
          : "-" + Math.floor(activeDay[0].main.feels_like) + "°";
};
