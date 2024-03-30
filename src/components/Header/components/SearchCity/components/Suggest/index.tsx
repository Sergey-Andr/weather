import { FC, memo, ReactElement, useState } from "react";
import { IWeatherData } from "@/services/weatherGeo.ts";
import { useSetSearchedCityActions } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";

interface ILoader {
    isLoading: boolean;
    data?: IWeatherData;
}

const Suggest: FC<ILoader> = ({ isLoading, data }): ReactElement => {
    const [singleClick, setSingleClick] = useState(false);
    const { setSearchedCity } = useSetSearchedCityActions();
    let place = "";

    if (!data) {
        if (isLoading) place = "Loading....";
        else return <></>;
    }
    if (data?.data.length) {
        const { name, state, country } = data.data[0];
        place = `${name ? name + ", " : ""}${state ? state + ", " : ""}${country ?? ""}`;
    }

    return (
        <div
            className={`w-[420px] h-[28px] rounded-b text-slate-300 border-none p-4 mt-2 flex items-center cursor-pointer ${singleClick ? "bg-blue-500" : "bg-subDefault"}`}
            onClick={() => {
                if (!singleClick) {
                    setSingleClick(true);
                } else {
                    setSingleClick(false);
                    data ? setSearchedCity(data.data[0].name) : <></>;
                }
            }}
            onDragEnter={() => {
                setSingleClick(false);
                data ? setSearchedCity(data.data[0].name) : <></>;
            }}
        >
            {place}
        </div>
    );
};

export default memo(Suggest);
