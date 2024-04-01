import { memo, ReactElement } from "react";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import { selectTheme } from "@/store/themeStore.ts";

const Description = (): ReactElement => {
    const theme = selectTheme();
    const activeDayData = selectActiveDayData();
    const temp = activeDayData.map((el) => el.main.temp).sort((a, b) => a - b);
    return (
        <div className="mr-4">
            <p className="text-2xl font-semibold mb-12">
                {activeDayData[0].weather[0].description}
            </p>
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <p
                        className={`text-sm ${theme === "dark" ? "text-minMaxTemp" : "text-black"}`}
                    >
                        min
                    </p>
                    <p>
                        {temp[0] ? "+" : "-"}
                        {Math.floor(temp[0])}°
                    </p>
                </div>
                <div className="items-center flex flex-col">
                    <p
                        className={`text-sm ${theme === "dark" ? "text-minMaxTemp" : "text-black"}`}
                    >
                        max
                    </p>
                    <p>
                        {temp[temp.length - 1] ? "+" : "-"}
                        {Math.floor(temp[temp.length - 1])}°
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(Description);
