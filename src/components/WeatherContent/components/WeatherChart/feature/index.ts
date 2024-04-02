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
            height: 208,
            type: "column",
            backgroundColor: "transparent",
        },
        plotOptions: {
            column: {
                borderWidth: 0,
            },
            series: {
                borderRadius: "50%",
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
                    letterSpacing: "0.5px",
                    color: theme === "dark" ? "#646464" : "#000",
                },
            },
            gridLineWidth: 0,
        },
        yAxis: {
            visible: true,
            gridLineWidth: 1,
            gridLineColor: theme === "dark" ? "#323232" : "#A7C4D4",
            labels: {
                style: {
                    color: theme === "dark" ? "#646464" : "#000",
                },
            },
            title: "",
        },
        legend: {
            enabled: false,
        },
        tooltip: {
            formatter: function (this: any) {
                if (temp === "C") {
                    return this.y ? `+${this.y}°` : `-${this.y}°`;
                } else {
                    return this.y ? `${this.y}°` : `${this.y}°`;
                }
            },
        },
        series: [
            {
                pointWidth: 12,
                color: color,
                data: charts,
            },
        ],
    };
};
