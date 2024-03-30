import { IWeatherDay } from "@/services/weatherForecast.ts";

export const options = ({
    charts,
    name,
    customCategories,
    color,
}: {
    charts: number[];
    name: "Temperature" | "Pressure mm" | "Humidity %" | "Wind";
    customCategories: string[];
    color: string;
}) => {
    return {
        chart: {
            height: 200,
            type: "line",
            backgroundColor: "transparent",
        },
        plotOptions: {
            column: {
                borderWidth: 0,
            },
            series: {
                borderRadius: "50%",
                dataLabels: {
                    enabled: true,
                    style: {
                        color: "#c5c5c5",
                        fontSize: "14px",
                        textOutline: "none",
                    },
                },
            },
            vector: {
                borderRadius: "50%",
            },
        },
        pane: { borderRadius: "50%" },
        credits: {
            enabled: false,
        },
        title: {
            text: "",
        },
        xAxis: {
            categories: customCategories,
            title: {
                text: name,
                style: {
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                },
            },
            labels: {
                style: {
                    fontSize: "18px",
                    color: "#646464",
                },
            },
            gridLineWidth: 0,
        },
        yAxis: {
            visible: true,
            gridLineWidth: 0,
            title: "",
        },
        legend: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        series: [
            {
                color: color,
                data: charts,
                dataLabels: {
                    formatter: function (this: any) {
                        if (name === "Temperature")
                            return this.y
                                ? "+" + this.y + "°"
                                : "-" + this.y + "°";
                        else {
                            return this.y;
                        }
                    },
                },
            },
        ],
    };
};

interface IPrepareData {
    data: IWeatherDay[];
    key: "temp" | "feels_like" | "pressure" | "humidity" | "wind";
}

export type TWeatherData = {
    weatherValues: number[];
    time: string[];
};

export type TWindData = {
    windSpeed: number;
    windDeg: number;
}[];

export const prepareData = ({
    data,
    key,
}: IPrepareData): TWeatherData | TWindData => {
    if (key === "wind") {
        return data.map((el) => ({
            windSpeed: el.wind.speed,
            windDeg: el.wind.deg,
        }));
    }

    const weatherValues = data.map((el) => Math.floor(el.main[key]));
    const time = data.map((el) => el.dt_txt.slice(11, 16));

    return { weatherValues, time };
};
