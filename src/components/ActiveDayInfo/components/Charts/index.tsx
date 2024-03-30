import { memo, ReactElement } from "react";
import Temperature from "@/components/ActiveDayInfo/components/Charts/components/TemperatureChart";
import FeelsLike from "@/components/ActiveDayInfo/components/Charts/components/FeelsLikeInfo";
import Pressure from "@/components/ActiveDayInfo/components/Charts/components/PressureChart";
import Wind from "@/components/ActiveDayInfo/components/Charts/components/WIndInfo";
import Humidity from "@/components/ActiveDayInfo/components/Charts/components/HumidityChart";

const ActiveDayCharts = (): ReactElement => {
    return (
        <div>
            <Temperature />
            <FeelsLike />
            <Pressure />
            <Wind />
            <Humidity />
        </div>
    );
};

export default memo(ActiveDayCharts);
