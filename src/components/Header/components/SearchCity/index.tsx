import { memo, ReactElement, useState } from "react";
import * as zoomPath from "@/../public/zoom.svg";
import { Input } from "@/components/ui/input.tsx";
import { useWeatherGeoQuery } from "@/services/weatherGeo.ts";
import { FaXmark } from "react-icons/fa6";
import { useSetSearchedCityActions } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";

const SearchCity = (): ReactElement => {
    const { setSearchedCity } = useSetSearchedCityActions();

    const [cityName, setCityName] = useState("");
    const [debounceRequestName, setDebounceRequestName] = useState("");
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
        null,
    );

    const { data, isLoading } = useWeatherGeoQuery(debounceRequestName);

    let place = "";
    if (!data && debounceRequestName.length !== 0) {
        if (isLoading) place = "Loading....";
    }
    if (data?.data.length) {
        const { name, state, country } = data.data[0];
        place = `${name ? name + ", " : ""}${state ? state + ", " : ""}${country ?? ""}`;
    }

    const handleInputChange = (name: string, delay: number) => {
        setCityName(name);
        if (debounceTimer) clearTimeout(debounceTimer);
        const timer = setTimeout(() => {
            setDebounceRequestName(name);
        }, delay);
        setDebounceTimer(timer);
    };

    return (
        <div className="relative mr-20">
            <div className="relative w-fit h-fit">
                <img
                    src={zoomPath.default}
                    alt="zoom icon"
                    className="w-5 h-5 absolute top-2.5 left-4 "
                />
                <Input
                    className="w-[320px] h-[28px] bg-subDefault rounded-full text-[#707070] border-none p-5 pl-11"
                    placeholder="Search city..."
                    value={cityName}
                    onChange={(e) => handleInputChange(e.target.value, 300)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            data
                                ? setSearchedCity(
                                      `${data.data[0].name}, ${data.data[0].country}`,
                                  )
                                : "";
                            setDebounceRequestName("");
                            setCityName("");
                        }
                    }}
                />
                <FaXmark
                    className={`fill-white absolute top-1 right-1 w-8 h-8 p-2 cursor-pointer rounded-full
                     ${cityName ? "opacity-100" : "hidden"} hover:bg-brightSubDefault
                    `}
                    onClick={() => {
                        setCityName("");
                        setDebounceRequestName("");
                    }}
                />
            </div>
            {place ? (
                <div
                    className={`absolute z-10 w-[320px] h-[28px] rounded-full text-slate-300 border-none p-4 mt-2 flex items-center
                    hover:bg-brightSubDefault hover:text-subDefault
                    cursor-pointer bg-subDefault`}
                    onClick={() => {
                        data
                            ? setSearchedCity(
                                  `${data.data[0].name}, ${data.data[0].country}`,
                              )
                            : "";
                        setDebounceRequestName("");
                        setCityName("");
                    }}
                >
                    {place}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default memo(SearchCity);
