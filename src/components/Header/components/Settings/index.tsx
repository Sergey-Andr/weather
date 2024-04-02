import { memo, ReactElement } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { HiViewGrid } from "react-icons/hi";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import { selectTheme } from "@/store/themeStore.ts";
import {
    selectSettingsTemperature,
    selectSettingsTime,
    useSetSettingsActions,
} from "@/store/settingsStore.ts";

const Settings = (): ReactElement => {
    const theme = selectTheme();
    const { setTime, setTemperature } = useSetSettingsActions();
    const temperature = selectSettingsTemperature();
    const time = selectSettingsTime();
    return (
        <Popover>
            <PopoverTrigger>
                <div
                    className={`flex items-center justify-center w-10 h-10 border-2 ${theme === "dark" ? "bg-subDefault border-skeleton" : "bg-subDefaultBrightMode  border-skeletonBrightMode"} rounded-full cursor-pointer`}
                >
                    <HiViewGrid className="h-5 w-5 fill-white" />
                </div>
            </PopoverTrigger>
            <PopoverContent
                className={`${theme === "dark" ? "bg-subDefault text-white " : "bg-subDefaultBrightMode text-black"} w-60 border-none rounded-2xl`}
            >
                <div className="b">
                    <div className="space-y-2">
                        <h4 className="font-medium text-xl mb-2">Settings</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <label>Temperature</label>
                            <Select
                                value={temperature}
                                onValueChange={(e) => {
                                    setTemperature(e);
                                }}
                            >
                                <SelectTrigger
                                    className={`w-[130px] border-none font-semibold ${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"}`}
                                >
                                    <SelectValue placeholder="Temperature" />
                                </SelectTrigger>
                                <SelectContent
                                    className={`w-[150px] rounded-2xl ${theme === "dark" ? "bg-subDefault text-white" : "bg-subDefaultBrightMode  text-dark border-skeletonBrightMode"}`}
                                >
                                    <SelectItem
                                        value={"C"}
                                        className="cursor-pointer font-semibold"
                                    >
                                        Celsius, °С
                                    </SelectItem>
                                    <SelectItem
                                        value={"F"}
                                        className="cursor-pointer font-semibold"
                                    >
                                        Fahrenheit, °F
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <label>Format</label>
                            <Select
                                value={time}
                                onValueChange={(e) => {
                                    setTime(e);
                                }}
                            >
                                <SelectTrigger
                                    className={`w-[100px] border-none ${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"} font-medium`}
                                >
                                    <SelectValue placeholder="Format" />
                                </SelectTrigger>
                                <SelectContent
                                    className={`w-[90px] rounded-2xl ${theme === "dark" ? "bg-subDefault text-white" : "bg-subDefaultBrightMode text-dark border-skeletonBrightMode"}`}
                                >
                                    <SelectItem
                                        value={"24"}
                                        className="cursor-pointer font-semibold"
                                    >
                                        24-hour
                                    </SelectItem>
                                    <SelectItem
                                        value={"12"}
                                        className="cursor-pointer font-semibold"
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
    );
};

export default memo(Settings);
