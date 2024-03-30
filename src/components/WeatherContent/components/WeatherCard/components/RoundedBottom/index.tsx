import { FC, memo, ReactElement } from "react";
import { selectActiveDay } from "@/components/WeatherContent/store/useDaysValue.ts";
import moment from "moment";

interface IRoundedBottom {
    dtTxt: string;
}

const RoundedBottom: FC<IRoundedBottom> = ({ dtTxt }): ReactElement => {
    const activeDay = selectActiveDay();

    const currentDay = moment().format("dddd");
    const lastDay = moment().add(5, "days").format("dddd");
    const date = moment(dtTxt).format("dddd");
    const isCurrentDay = currentDay === date;
    const isLastDay = lastDay === date;

    return (
        <>
            {activeDay === dtTxt.slice(8, 10) ? (
                <>
                    <div
                        className={`${isCurrentDay ? "hidden" : ""} w-2 h-2 absolute bottom-[2px] left-[-8px] rotate-90 bg-default`}
                    >
                        <div className="w-2 h-2 absolute left-0 bg-transparent border-r-2 border-t-2 border-skeleton z-10 rounded-tr-2xl" />
                    </div>
                    <div
                        className={`${isLastDay ? "hidden" : ""} w-2 h-2 absolute bottom-[2px] right-[-8px] rotate-90 bg-default z-0`}
                    >
                        <div className="w-2 h-2 absolute right-0 bg-transparent border-r-2 border-b-2 border-skeleton z-10 rounded-ee-2xl" />
                    </div>
                    <div
                        className={` ${isCurrentDay ? "w-[118px]" : "w-[184px]"} ${isLastDay ? "hidden" : ""} right-[-4px] h-[6px] absolute bottom-[0px]  bg-subDefault rounded-t-xl`}
                    />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default memo(RoundedBottom);
