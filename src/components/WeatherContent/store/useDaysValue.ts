import { createStore } from "@/store/createStore.ts";
import moment from "moment/moment";
import { FIVE_DAYS } from "@/components/SubHeader/constants";

interface IUseDaysValueStore extends IUseDaysValueContent {
    actions: IUseDaysValueActions;
}

export interface IUseDaysValueContent {
    daysValue?: number;
    activeDay?: string;
}

interface IUseDaysValueActions {
    setDaysValue: (daysValue: number) => void;
    setActiveDay: (activeDay: string) => void;
}

const useDaysValueStore = createStore(
    (set: (actions: IUseDaysValueContent) => void): IUseDaysValueStore => ({
        daysValue: FIVE_DAYS,
        activeDay: moment().format("dd"),
        actions: {
            setDaysValue: (daysValue) => set({ daysValue }),
            setActiveDay: (activeDay) => set({ activeDay }),
        },
    }),
    `daysValue`,
    true,
);

export const selectDaysValue = (): number =>
    useDaysValueStore((state: IUseDaysValueStore) => state.daysValue);

export const selectActiveDay = (): string =>
    useDaysValueStore((state: IUseDaysValueStore) => state.activeDay);

export const useSetDaysActions = (): IUseDaysValueActions =>
    useDaysValueStore((state: IUseDaysValueStore) => state.actions);
