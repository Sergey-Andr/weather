import { createStore } from "@/store/createStore.ts";
import { IActiveDayWeatherData } from "@/services/weatherForecast.ts";

interface IUseActiveDayDataStore extends IUseActiveDayDataContent {
    actions: IUseActiveDayDataActions;
}

export interface IUseActiveDayDataContent {
    activeDayData?: IActiveDayWeatherData[];
}

interface IUseActiveDayDataActions {
    setActiveDayData: (activeDayData: IActiveDayWeatherData[]) => void;
}

const useActiveDayDataStore = createStore(
    (
        set: (actions: IUseActiveDayDataContent) => void,
    ): IUseActiveDayDataStore => ({
        activeDayData: [],
        actions: {
            setActiveDayData: (activeDayData) => set({ activeDayData }),
        },
    }),
    "activeDayData",
    true,
    "session",
);

export const selectActiveDayData = (): IActiveDayWeatherData[] =>
    useActiveDayDataStore(
        (state: IUseActiveDayDataStore) => state.activeDayData,
    );

export const useSetActiveDayDataActions = (): IUseActiveDayDataActions =>
    useActiveDayDataStore((state: IUseActiveDayDataStore) => state.actions);
