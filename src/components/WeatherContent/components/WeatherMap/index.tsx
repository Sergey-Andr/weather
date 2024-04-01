import { memo, ReactElement, useMemo, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { mapThemeDarkMode } from "@/components/WeatherContent/components/WeatherMap/constants";
import { selectTheme } from "@/store/themeStore.ts";

const WeatherMap = (): ReactElement => {
    const theme = selectTheme();
    const mapRef = useRef(null);
    useMemo(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_API_GOOGLE_MAP_KEY,
            version: "weekly",
        });

        loader.load().then(() => {
            if (!mapRef.current) {
                return;
            }
            const map = new google.maps.Map(mapRef.current, {
                center: { lat: 40, lng: -10 },
                zoom: 2,
                styles: mapThemeDarkMode(theme),
            });

            const temperatureLayer = new google.maps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                    return `https://tile.openweathermap.org/map/temp_new/${zoom}/${coord.x}/${coord.y}.png?appid=${import.meta.env.VITE_API_KEY}`;
                },
                tileSize: new google.maps.Size(256, 256),
                maxZoom: 18,
                minZoom: 0,
                name: "Temperature",
            });

            map.overlayMapTypes.push(temperatureLayer);
        });
    }, [theme]);

    return <div ref={mapRef} className="h-[420px] w-[1120px]"></div>;
};

export default memo(WeatherMap);
