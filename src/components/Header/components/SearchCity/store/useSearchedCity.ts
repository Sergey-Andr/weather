import { createStore } from "@/store/createStore.ts";

interface IUseSearchedCityStore extends IUseSearchedCityContent {
    actions: IUseSearchedCityActions;
}

export interface IUseSearchedCityContent {
    searchedCity: string;
}

interface IUseSearchedCityActions {
    setSearchedCity: (searchedCity: string) => void;
}

const useSearchedCityStore = createStore(
    (
        set: (actions: IUseSearchedCityContent) => void,
    ): IUseSearchedCityStore => ({
        searchedCity: "Kherson",
        actions: {
            setSearchedCity: (searchedCity) => set({ searchedCity }),
        },
    }),
);

export const selectSearchedCity = (): string =>
    useSearchedCityStore((state: IUseSearchedCityStore) => state.searchedCity);

export const useSetSearchedCityActions = (): IUseSearchedCityActions =>
    useSearchedCityStore((state: IUseSearchedCityStore) => state.actions);
