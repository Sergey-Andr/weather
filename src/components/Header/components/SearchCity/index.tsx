import { memo, ReactElement, useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { useWeatherGeoQuery } from "@/services/weatherGeo.ts";
import Suggest from "@/components/Header/components/SearchCity/components/Suggest";
import { FaXmark } from "react-icons/fa6";

const SearchCity = (): ReactElement => {
    //посмотреть
    const [cityName, setCityName] = useState("");
    const [debounceRequestName, setDebounceRequestName] = useState("");
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
        null,
    );

    const handleInputChange = (name: string, delay: number) => {
        setCityName(name);
        if (debounceTimer) clearTimeout(debounceTimer);
        const timer = setTimeout(() => {
            setDebounceRequestName(name);
        }, delay);
        setDebounceTimer(timer);
    };

    const { data, isLoading } = useWeatherGeoQuery(debounceRequestName);

    return (
        <div>
            <div className="relative w-fit h-fit">
                <Input
                    className="w-[420px] h-[28px] bg-subDefault rounded text-slate-300 border-none p-4"
                    placeholder="City..."
                    value={cityName}
                    onChange={(e) => handleInputChange(e.target.value, 300)}
                />
                <FaXmark
                    className={`fill-white absolute top-0 right-0 w-8 h-8 p-2 cursor-pointer ${cityName ? "opacity-100" : "hidden"}`}
                    onClick={() => {
                        setCityName("");
                        setDebounceRequestName("");
                    }}
                />
            </div>
            <Suggest isLoading={isLoading} data={data} />
        </div>
    );
};

export default memo(SearchCity);
