import { createStore } from "@/store/createStore.ts";
import moment from "moment/moment";

interface IUseDaysValueStore extends IUseDaysValueContent {
    actions: IUseDaysValueActions;
}

export interface IUseDaysValueContent {
    activeDay: string;
}

interface IUseDaysValueActions {
    setActiveDay: (activeDay: string) => void;
}

const useDaysValueStore = createStore(
    (set: (actions: IUseDaysValueContent) => void): IUseDaysValueStore => ({
        activeDay: moment().format("DD"),
        actions: {
            setActiveDay: (activeDay) => set({ activeDay }),
        },
    }),
    `activeDay`,
    true,
    "session",
);

export const selectActiveDay = (): string =>
    useDaysValueStore((state: IUseDaysValueStore) => state.activeDay);

export const useSetDaysActions = (): IUseDaysValueActions =>
    useDaysValueStore((state: IUseDaysValueStore) => state.actions);
