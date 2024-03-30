import { memo, ReactElement } from "react";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayData.ts";
import moment from "moment/moment";

const SurfaceInfo = (): ReactElement => {
    const activeDayData = selectActiveDayData();
    const date = moment
        .unix(activeDayData[0].dt)
        .format("D dddd MMMM")
        .split(" ");
    return (
        <div className="flex m-5 min-w-[300px] items-center justify-center">
            <p className="text-5xl mr-4">{date[0]}</p>
            <div>
                <p className="text-lg text-minMaxTemp">{date[1]}</p>
                <p className="text-xl font-semibold">{date[2]}</p>
            </div>
        </div>
    );
};

export default memo(SurfaceInfo);