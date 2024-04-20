import { FC, memo, ReactElement } from "react";
import { IWeatherDay } from "@/services/weatherForecast.ts";
import LeftColumn from "@/components/WeatherContent/components/WeatherCard/components/Active/components/LeftColumn";
import RightColumn from "@/components/WeatherContent/components/WeatherCard/components/Active/components/RightColumn";
import moment from "moment";
import { selectSettingsTime } from "@/store/settingsStore.ts";

interface IActive {
    day: IWeatherDay;
}

const Active: FC<IActive> = ({ day }): ReactElement => {
    const time = selectSettingsTime();
    const currentTime = moment().format(time === "12" ? "h:mm A" : "HH:mm");
    const dayWeek = moment(day.dt_txt).format("DD dddd");

    return (
        <>
            <div
                className={`w-full h-12 bg-cardsHeader px-4 pt-1 rounded-t-3xl flex items-center whitespace-nowrap 
                    justify-between font-bold text-xl`}
            >
                <p className="mr-2 whitespace-nowrap">{dayWeek}</p>
                <p>{currentTime}</p>
            </div>
            <div
                className={`w-full h-[198px] p-4 bg-cards rounded-b-3xl flex justify-between`}
            >
                <LeftColumn
                    temp={day.main.temp}
                    feelsLike={day.main.feels_like}
                    pressure={day.main.pressure}
                    humidity={day.main.humidity}
                    dtTxt={day.dt_txt}
                    maxTemp={day.maxTemperature}
                />
                <RightColumn
                    icon={day?.weather[0].icon}
                    windSpeed={day.wind.speed}
                    windDeg={day.wind.deg}
                    description={day.weather[0].description}
                />
            </div>
        </>
    );
};

export default memo(Active);
