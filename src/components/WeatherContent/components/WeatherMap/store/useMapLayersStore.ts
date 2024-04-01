import { createStore } from "@/store/createStore.ts";

interface IUseMapLayersStore extends IUseMapLayersContent {
    actions: IUseMapLayersActions;
}

export interface IUseMapLayersContent {
    layer: string;
}

interface IUseMapLayersActions {
    setMapLayer: (layer: string) => void;
}

const useMapLayersStore = createStore(
    (set: (actions: IUseMapLayersContent) => void): IUseMapLayersStore => ({
        layer: "temp_new",
        actions: {
            setMapLayer: (layer) => set({ layer }),
        },
    }),
    "mapLayers",
    true,
    "session",
);

export const selectMapLayers = (): string =>
    useMapLayersStore((state: IUseMapLayersStore) => state.layer);

export const useSetMapLayersActions = (): IUseMapLayersActions =>
    useMapLayersStore((state: IUseMapLayersStore) => state.actions);
