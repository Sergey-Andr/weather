import { memo, ReactElement, useState } from "react";
import { zoomIcon } from "../../../../../public/zoom.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useWeatherGeoQuery } from "@/services/weatherGeo.ts";
import { FaXmark } from "react-icons/fa6";
import { useSetSearchedCityActions } from "@/components/Header/components/SearchCity/store/useSearchedCityStore.ts";
import { selectTheme } from "@/store/themeStore.ts";

const SearchCity = (): ReactElement => {
    const { setSearchedCity } = useSetSearchedCityActions();
    const theme = selectTheme();

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
    } else if (data && data.data.length === 0) place = "No Data";

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
                {zoomIcon(
                    `w-5 h-5 absolute top-3 left-4 ${theme === "dark" ? "stroke-white" : "stroke-black"}`,
                )}
                <Input
                    className={`w-80 h-7 font-medium rounded-full border-2 p-5 pl-11 placeholder:text-[#707070] ${theme === "dark" ? "bg-subDefault text-white border-skeleton" : "bg-subDefaultBrightMode text-black border-skeletonBrightMode"}`}
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
                    className={`absolute top-2 right-2 w-8 h-8 p-2 cursor-pointer rounded-full
                     ${cityName ? "opacity-100" : "hidden"} hover:bg-brightSubDefault 
                     ${theme === "dark" ? "fill-white" : "fill-textBrightMode"}
                    `}
                    onClick={() => {
                        setCityName("");
                        setDebounceRequestName("");
                    }}
                />
            </div>
            {place ? (
                <div
                    className={`absolute z-10 w-[320px] h-[28px] rounded-full border-none p-4 mt-2 flex items-center
                    hover:bg-brightSubDefault cursor-pointer
                    ${theme === "dark" ? "bg-subDefault text-slate-300 hover:text-subDefault" : "bg-subDefaultBrightMode text-black"}`}
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
