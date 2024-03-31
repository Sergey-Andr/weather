import { memo, ReactElement, useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { useWeatherGeoQuery } from "@/services/weatherGeo.ts";
import { FaXmark } from "react-icons/fa6";
import { useSetSearchedCityActions } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";
import { useWeatherForecastQuery } from "@/services/weatherForecast.ts";
import { selectActiveDay } from "@/components/WeatherContent/store/useDaysValue.ts";
import { useSetActiveDayDataActions } from "@/components/WeatherContent/store/useActiveDayData.ts";

const SearchCity = (): ReactElement => {
    //посмотреть
    const [cityName, setCityName] = useState("");
    const [clicked, setClicked] = useState(false);
    const [debounceRequestName, setDebounceRequestName] = useState("");
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
        null,
    );
    const { setSearchedCity } = useSetSearchedCityActions();
    const activeDay = selectActiveDay();
    const { setActiveDayData } = useSetActiveDayDataActions();
    const [singleClick, setSingleClick] = useState(false);

    let place = "";

    const handleInputChange = (name: string, delay: number) => {
        setClicked(false);
        setCityName(name);
        if (debounceTimer) clearTimeout(debounceTimer);
        const timer = setTimeout(() => {
            setDebounceRequestName(name);
        }, delay);
        setDebounceTimer(timer);
    };

    const { data, isLoading } = useWeatherGeoQuery(debounceRequestName);

    const { data: weatherData } = useWeatherForecastQuery({
        name: clicked ? data?.data[0]?.name : "",
        lang: "en",
        activeDay: activeDay,
    });

    if (weatherData) {
        setDebounceRequestName("");
        setCityName("");
        const { weather } = weatherData;
        setActiveDayData(weather.activeDayData);
    }

    if (!data && debounceRequestName.length !== 0) {
        if (isLoading) place = "Loading....";
    }
    if (data?.data.length) {
        const { name, state, country } = data.data[0];
        place = `${name ? name + ", " : ""}${state ? state + ", " : ""}${country ?? ""}`;
    }

    return (
        <div className="relative">
            <div className="relative w-fit h-fit">
                <Input
                    className="w-[420px] h-[28px] bg-subDefault rounded text-slate-300 border-none p-4"
                    placeholder="City..."
                    value={cityName}
                    onChange={(e) => handleInputChange(e.target.value, 300)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setClicked(true);
                            setSingleClick(false);
                            data ? setSearchedCity(data.data[0].name) : "";
                        }
                        if (e.key === "ArrowDown") {
                            setSingleClick(true);
                        }
                        if (e.key === "ArrowUp") {
                            setSingleClick(false);
                        }
                    }}
                />
                <FaXmark
                    className={`fill-white absolute top-0 right-0 w-8 h-8 p-2 cursor-pointer ${cityName ? "opacity-100" : "hidden"}`}
                    onClick={() => {
                        setCityName("");
                        setDebounceRequestName("");
                        setClicked(false);
                        setSingleClick(false);
                    }}
                />
            </div>
            {place ? (
                <div
                    className={`absolute w-[420px] h-[28px] rounded-b text-slate-300 border-none p-4 mt-2 flex items-center 
                    cursor-pointer ${singleClick ? "bg-blue-500" : "bg-subDefault"}`}
                    onClick={() => {
                        if (!singleClick) {
                            setSingleClick(true);
                        } else {
                            setClicked(true);
                            setSingleClick(false);
                            data ? setSearchedCity(data.data[0].name) : "";
                        }
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
