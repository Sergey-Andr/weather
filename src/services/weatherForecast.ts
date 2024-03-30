import { useQuery } from "react-query";
import Api from "@/api/api.ts";
import { IUseDaysValueContent } from "@/components/WeatherContent/store/useDaysValue.ts";

export interface IWeatherDay {
    clouds: {
        all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
    };
    minTemperature: number;
    maxTemperature: number;
    pop: number;
    sys: {
        pod: string;
    };
    visibility: number;
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}

export interface IActiveDayWeatherData extends IWeatherDay {
    min: number;
    max: number;
}

export interface IWeatherData {
    weather: {
        currentSixDays: IWeatherDay[];
        activeDayData: IActiveDayWeatherData[];
    };
}

type activeDay = Pick<IUseDaysValueContent, "activeDay">;

export interface IWeatherForecast extends activeDay {
    name: string;
    units?: string;
    lang?: string;
}

const weatherKey = (...props: any) => ["weather10days", ...props];

const weatherFn = ({ name, units, lang }: any) => {
    return Api.get(
        `/data/2.5/forecast?q=${name}&appid=${import.meta.env.VITE_API_KEY}&units=${units}&lang=${lang}`,
    );
};

export const useWeatherForecastQuery = ({
    name,
    units = "metric",
    lang = "ru",
    activeDay,
}: IWeatherForecast) => {
    return useQuery({
        queryKey: weatherKey(name, units, lang),
        queryFn: () =>
            weatherFn({
                name: name,
                units: units,
                lang: lang,
            }),
        select: (data: any): IWeatherData => {
            console.log(name);
            const currentSixDays = data.list.reduce(
                (
                    acc: any[],
                    item: IWeatherDay,
                    index: number,
                    arr: IWeatherDay[],
                ) => {
                    if (
                        index === 0 ||
                        item.dt_txt.slice(8, 10) !==
                            arr[index - 1].dt_txt.slice(8, 10)
                    ) {
                        const temperatures = arr
                            .filter(
                                (el: IWeatherDay) =>
                                    item.dt_txt.slice(8, 10) ===
                                    el.dt_txt.slice(8, 10),
                            )
                            .map((el: IWeatherDay) => el.main.temp);
                        const maxTemperature = Math.max(...temperatures);
                        const minTemperature = Math.min(...temperatures);
                        acc.push({
                            ...item,
                            maxTemperature,
                            minTemperature,
                        });
                    }
                    return acc;
                },
                [],
            );

            const activeDayData = data.list
                .map((item: IWeatherDay) => {
                    if (activeDay === item.dt_txt.slice(8, 10)) {
                        const { maxTemperature, minTemperature } =
                            currentSixDays.find((el: IWeatherDay) => {
                                return el.dt_txt.slice(8, 10) === activeDay;
                            });

                        return {
                            ...item,
                            max: maxTemperature,
                            min: minTemperature,
                        };
                    } else {
                        return null;
                    }
                })
                .filter((item: IActiveDayWeatherData) => item !== null);

            return {
                weather: { currentSixDays, activeDayData },
            };
        },
    });
};
