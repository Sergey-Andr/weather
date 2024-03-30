import {
    selectDaysValue,
    useSetDaysActions,
} from "@/components/WeatherContent/store/useDaysValue.ts";
import { memo, ReactElement } from "react";
import { FIVE_DAYS, TODAY, TOMMOROW } from "@/components/SubHeader/constants";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { selectSearchedCity } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";

const SubHeader = (): ReactElement => {
    const daysValue = selectDaysValue();
    const searchedCity = selectSearchedCity();
    const { setDaysValue } = useSetDaysActions();

    return (
        <div className="text-white flex items-center justify-between mb-4">
            <p className="text-2xl font-bold">Weather in {searchedCity}</p>
            <div className="flex">
                <Link to={"/weather/current_day"}>
                    <Button
                        className={`hover:underline cursor-pointer text-lg ${daysValue === TODAY ? "text-blue-500" : ""}`}
                        onClick={() => {
                            if (daysValue !== TODAY) {
                                setDaysValue(TODAY);
                            }
                        }}
                    >
                        Today
                    </Button>
                </Link>
                <Link to={"/"}>
                    <Button
                        className={`hover:underline cursor-pointer text-lg ${daysValue === TOMMOROW ? "text-blue-500" : ""}`}
                        onClick={() => {
                            if (daysValue !== TOMMOROW) {
                                setDaysValue(TOMMOROW);
                            }
                        }}
                    >
                        Tommorow
                    </Button>
                </Link>
                <Link to={"/"}>
                    <Button
                        className={`hover:underline cursor-pointer text-lg ${daysValue === FIVE_DAYS ? "text-blue-500" : ""}`}
                        onClick={() => {
                            if (daysValue !== FIVE_DAYS) {
                                setDaysValue(FIVE_DAYS);
                            }
                        }}
                    >
                        5 Days
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default memo(SubHeader);
