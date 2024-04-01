import { createStore } from "@/store/createStore.ts";

interface IUseThemeStore extends IUseThemeContent {
    actions: IUseThemeActions;
}

export interface IUseThemeContent {
    theme: string;
}

interface IUseThemeActions {
    setTheme: (theme: string) => void;
}

const useThemeStore = createStore(
    (set: (actions: IUseThemeContent) => void): IUseThemeStore => ({
        theme: "bright",
        actions: {
            setTheme: (theme) => set({ theme }),
        },
    }),
    "theme",
    true,
);

export const selectTheme = (): string =>
    useThemeStore((state: IUseThemeStore) => state.theme);

export const useSetThemeActions = (): IUseThemeActions =>
    useThemeStore((state: IUseThemeStore) => state.actions);
