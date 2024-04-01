export const options = ({
    charts,
    customCategories,
    color,
    temp,
    theme,
}: {
    charts: number[];
    customCategories: string[];
    color: string;
    temp: string;
    theme: string;
}) => {
    return {
        chart: {
            height: 245,
            type: "column",
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
                        color: theme === "dark" ? "#c5c5c5" : "#646464",
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
            labels: {
                style: {
                    fontSize: "16px",
                    color: "#646464",
                },
            },
            gridLineWidth: 0,
            step: 1,
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
                pointWidth: 12,
                color: color,
                data: charts,
                dataLabels: {
                    formatter: function (this: any) {
                        if (temp === "C") {
                            return this.y ? `+${this.y}°` : `-${this.y}°`;
                        } else {
                            return this.y ? `${this.y}°` : `${this.y}°`;
                        }
                    },
                },
            },
        ],
    };
};
