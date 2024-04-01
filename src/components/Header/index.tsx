import { memo, ReactElement } from "react";
import * as logo from "@/../public/logo.svg";
import SearchCity from "@/components/Header/components/SearchCity";
import SwitchThemeMode from "@/components/Header/components/SwitchThemeMode";
import { selectSearchedCity } from "@/components/Header/components/SearchCity/store/useSearchedCity.ts";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import {
    selectSettingsTemperature,
    selectSettingsTime,
    useSetSettingsActions,
} from "@/store/settingsStore.ts";
import { HiLocationMarker, HiViewGrid } from "react-icons/hi";

const Header = (): ReactElement => {
    const searchedCity = selectSearchedCity();
    const { setTime, setTemperature } = useSetSettingsActions();
    const temperature = selectSettingsTemperature();
    const time = selectSettingsTime();
    return (
        <div className="pt-4 mb-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src={logo.default} alt="logo" className="w-[220px] mr-8" />

                <div className="w-40 h-10 px-4 mr-16 bg-subDefault rounded-full flex items-center justify-center">
                    <HiLocationMarker className="w-5 h-5 mr-2 fill-white" />
                    <span className="text-white flex font-semibold">
                        {searchedCity.split(",")[0]}
                        <p className="text-white font-normal">
                            ,{searchedCity.split(",")[1]}
                        </p>
                    </span>
                </div>
                <SearchCity />
            </div>
            <div className="flex items-center">
                <SwitchThemeMode />
                <Popover>
                    <PopoverTrigger>
                        <div className="flex items-center justify-center w-10 h-10 bg-subDefault rounded-full cursor-pointer">
                            <HiViewGrid className="h-5 w-5 fill-white" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="bg-subDefault border-none text-white">
                        <div className="b">
                            <div className="space-y-2">
                                <h4 className="font-medium text-xl mb-2">
                                    Settings
                                </h4>
                            </div>
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <label>Temperature</label>
                                    <Select
                                        onValueChange={(e) => {
                                            setTemperature(e);
                                        }}
                                    >
                                        <SelectTrigger className="w-[130px] border-none bg-subDefault font-medium">
                                            <SelectValue
                                                placeholder={`${temperature === "C" ? "Celsius, °С" : "Fahrenheit, °F"}`}
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="w-[150px] border-none text-white bg-subDefault">
                                            <SelectItem
                                                value={"C"}
                                                className="cursor-pointer"
                                            >
                                                Celsius, °С
                                            </SelectItem>
                                            <SelectItem
                                                value={"F"}
                                                className="cursor-pointer"
                                            >
                                                Fahrenheit, °F
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <label>Format</label>
                                    <Select
                                        onValueChange={(e) => {
                                            setTime(e);
                                        }}
                                    >
                                        <SelectTrigger className="w-[100px] border-none bg-subDefault font-medium">
                                            <SelectValue
                                                placeholder={`${time === "12" ? "12-hour" : "24-hour"}`}
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="w-[90px] border-none text-white bg-subDefault">
                                            <SelectItem
                                                value={"24"}
                                                className="cursor-pointer"
                                            >
                                                24-hour
                                            </SelectItem>
                                            <SelectItem
                                                value={"12"}
                                                className="cursor-pointer"
                                            >
                                                12-hour
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default memo(Header);
