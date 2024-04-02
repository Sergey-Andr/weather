import { memo, ReactElement } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import {
    selectMapLayers,
    useSetMapLayersActions,
} from "@/components/WeatherContent/components/WeatherMap/store/useMapLayersStore.ts";
import { selectTheme } from "@/store/themeStore.ts";

const SelectLayer = (): ReactElement => {
    const theme = selectTheme();
    const { setMapLayer } = useSetMapLayersActions();
    const layer = selectMapLayers();
    return (
        <div
            className={`w-52 ml-auto mb-4 border-2 ${theme === "dark" ? "bg-subDefault border-skeleton text-white" : "bg-subDefaultBrightMode text-black border-skeletonBrightMode"} rounded-full`}
        >
            <Select value={layer} onValueChange={(e) => setMapLayer(e)}>
                <SelectTrigger className="border-none font-semibold">
                    <SelectValue placeholder={`Map layers`} />
                </SelectTrigger>
                <SelectContent
                    className={`bg-subDefault border-2 font-semibold ${theme === "dark" ? "bg-subDefault border-skeleton text-white" : "bg-subDefaultBrightMode border-skeletonBrightMode"} rounded-2xl top-2`}
                >
                    <SelectItem value="clouds_new">Clouds</SelectItem>
                    <SelectItem value="precipitation_new">
                        Precipitation
                    </SelectItem>
                    <SelectItem value="pressure_new">
                        Sea level pressure
                    </SelectItem>
                    <SelectItem value="wind_new">Wind speed</SelectItem>
                    <SelectItem value="temp_new">Temperature</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default memo(SelectLayer);
