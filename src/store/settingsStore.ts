import { createStore } from "@/store/createStore.ts";

interface IUseSettingsStore extends IUseSettingsContent {
    actions: IUseSettingsActions;
}

export interface IUseSettingsContent {
    temperature?: string;
    time?: string;
}

interface IUseSettingsActions {
    setTemperature: (temperature: string) => void;
    setTime: (time: string) => void;
}

const useSettingsStore = createStore(
    (set: (actions: IUseSettingsContent) => void): IUseSettingsStore => ({
        temperature: "C",
        time: "12",
        actions: {
            setTemperature: (temperature) => set({ temperature }),
            setTime: (time) => set({ time }),
        },
    }),
    "settings",
    true,
);

export const selectSettingsTemperature = (): string =>
    useSettingsStore((state: IUseSettingsStore) => state.temperature);

export const selectSettingsTime = (): string =>
    useSettingsStore((state: IUseSettingsStore) => state.time);

export const useSetSettingsActions = (): IUseSettingsActions =>
    useSettingsStore((state: IUseSettingsStore) => state.actions);
