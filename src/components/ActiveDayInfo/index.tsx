import { memo, ReactElement } from "react";
import ActiveDayCharts from "@/components/ActiveDayInfo/components/Charts";
import Header from "@/components/ActiveDayInfo/components/Header";

const ActiveDayInfo = (): ReactElement => {
    return (
        <div>
            <Header />
            <ActiveDayCharts />
        </div>
    );
};

export default memo(ActiveDayInfo);
