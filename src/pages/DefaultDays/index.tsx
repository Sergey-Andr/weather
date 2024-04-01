import { memo, ReactElement } from "react";
import DefaultLayout from "@/layouts/Default";
import WeatherContent from "@/components/WeatherContent";

const DefaultDays = (): ReactElement => {
    return (
        <DefaultLayout>
            <WeatherContent />
        </DefaultLayout>
    );
};

export default memo(DefaultDays);
