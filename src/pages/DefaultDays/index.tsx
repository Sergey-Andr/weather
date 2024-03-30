import { memo, ReactElement } from "react";
import WeatherContent from "@/components/WeatherContent";
import DefaultLayout from "@/layouts/Default";

const DefaultDays = (): ReactElement => {
    return (
        <DefaultLayout>
            <WeatherContent />
        </DefaultLayout>
    );
};

export default memo(DefaultDays);
