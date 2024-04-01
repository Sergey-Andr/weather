import { useQuery } from "react-query";
import Api from "@/api/api.ts";

export interface IWeatherData {
    data: any;
}

const weatherKey = (...props: any) => ["weatherGeo", ...props];

const weatherFn = (name: string) => {
    return Api.get(
        `/geo/1.0/direct?q=${name}&appid=${import.meta.env.VITE_API_KEY}`,
    );
};

export const useWeatherGeoQuery = (name: string) => {
    return useQuery({
        queryKey: weatherKey(name),
        queryFn: () => weatherFn(name),
        enabled: name.length >= 3,
        select: (data: any): IWeatherData => {
            return {
                data,
            };
        },
    });
};
