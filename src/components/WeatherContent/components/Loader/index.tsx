import { FC, memo, ReactElement } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

interface ILoader {
    noData?: boolean;
}

const Loader: FC<ILoader> = ({ noData = false }): ReactElement => {
    if (noData) {
        return (
            <div>
                <Skeleton className="w-[1120px] h-[488px] flex justify-center items-center text-white text-4xl">
                    No Data
                </Skeleton>
            </div>
        );
    }

    return (
        <div>
            <div className="flex">
                <Skeleton className="w-[180px] h-[120px] bg-skeleton rounded-xl mr-2" />
                <Skeleton className="w-[180px] h-[120px] bg-skeleton rounded-xl mr-2" />
                <Skeleton className="w-[180px] h-[120px] bg-skeleton rounded-xl mr-2" />
                <Skeleton className="w-[180px] h-[120px] bg-skeleton rounded-xl mr-2" />
                <Skeleton className="w-[180px] h-[120px] bg-skeleton rounded-xl mr-2" />
                <Skeleton className="w-[180px] h-[120px] bg-skeleton rounded-xl mb-8" />
            </div>
            <div>
                <Skeleton className="w-[1120px] h-[320px] bg-skeleton rounded-xl" />
            </div>
        </div>
    );
};

export default memo(Loader);
