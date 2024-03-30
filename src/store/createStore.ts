import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export const createStore = (
    fn: any,
    name = "",
    persistProp: boolean | string[] = false,
    storageType: "locale" | "session" = "locale",
) => {
    if (process.env.NODE_ENV === "development") {
        if (!persistProp) {
            return create(devtools(fn, { name }));
        }
        return create(
            devtools(
                persist(fn, {
                    partialize: (state: any) =>
                        Object.fromEntries(
                            Object.entries(state).filter(([key]) =>
                                typeof persistProp == "boolean"
                                    ? !["actions"].includes(key)
                                    : persistProp.includes(key),
                            ),
                        ),
                    name,
                    storage:
                        storageType === "locale"
                            ? createJSONStorage(() => localStorage)
                            : createJSONStorage(() => sessionStorage),
                }),
                { name },
            ),
        );
    }

    if (!persistProp) {
        return create(fn);
    }

    return create(
        persist(fn, {
            partialize: (state: any) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) =>
                        typeof persistProp == "boolean"
                            ? !["actions"].includes(key)
                            : persistProp.includes(key),
                    ),
                ),
            name,
            storage:
                storageType === "locale"
                    ? createJSONStorage(() => localStorage)
                    : createJSONStorage(() => sessionStorage),
        }),
    );
};
