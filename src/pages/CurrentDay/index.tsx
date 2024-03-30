import { memo, ReactElement } from "react";
import DefaultLayout from "@/layouts/Default";
import ActiveDayInfo from "@/components/ActiveDayInfo";

const CurrentDay = (): ReactElement => {
    return (
        <DefaultLayout>
            <div>
                <ActiveDayInfo />
            </div>
        </DefaultLayout>
    );
};

export default memo(CurrentDay);
