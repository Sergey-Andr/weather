import { FC, memo, ReactElement } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { selectTheme } from "@/store/themeStore.ts";

interface ILoader {
    noData?: boolean;
}

const Loader: FC<ILoader> = ({ noData = false }): ReactElement => {
    const theme = selectTheme();
    if (noData) {
        return (
            <div>
                <Skeleton
                    className={`w-[1115px] h-[488px] flex justify-center items-center ${theme === "dark" ? "text-white" : "text-black"} text-4xl`}
                >
                    No Data
                </Skeleton>
            </div>
        );
    }

    return (
        <div>
            <div className="flex">
                <div className="flex">
                    <Skeleton
                        className={`w-[285px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mr-6`}
                    />
                    <Skeleton
                        className={`w-[80px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mr-6`}
                    />
                    <Skeleton
                        className={`w-[80px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mr-6`}
                    />
                    <Skeleton
                        className={`w-[80px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mr-6`}
                    />
                    <Skeleton
                        className={`w-[80px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mr-6`}
                    />
                    <Skeleton
                        className={`w-[80px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mb-8 mr-9`}
                    />
                </div>
                <div className="relative">
                    <Skeleton
                        className={`w-[280px] h-[205px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl mb-8`}
                    />
                    <Skeleton
                        className={`w-[200px] h-[48px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-full mb-4 ml-auto`}
                    />
                </div>
            </div>
            <div>
                <Skeleton
                    className={`w-[1120px] h-[420px] ${theme === "dark" ? "bg-skeleton" : "bg-subDefaultBrightMode"} rounded-xl`}
                />
            </div>
        </div>
    );
};

export default memo(Loader);
