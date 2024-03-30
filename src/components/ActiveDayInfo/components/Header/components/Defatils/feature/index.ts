import { IWeatherDay } from "@/services/weatherForecast.ts";
import moment from "moment/moment";

export const findDiffDays = (activeDayData: IWeatherDay[]) => {
    const currentDate = moment().startOf("day");
    const specifiedDate = moment.unix(activeDayData[0].dt).startOf("day");

    if (specifiedDate.isAfter(currentDate)) {
        return specifiedDate.diff(currentDate, "days");
    }
    return 0;
};
