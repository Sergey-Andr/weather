import { FC, ReactElement } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import moment from "moment";
import { weatherIcon } from "@/features/weatherIcon.ts";

interface ILeftColumn {
    dtTxt: string;
    description: string;
    minTemp: number;
    icon: string;
}

const LeftColumn: FC<ILeftColumn> = ({
    dtTxt,
    description,
    minTemp,
    icon,
}): ReactElement => {
    const weekDay = moment(dtTxt).format("dddd");

    return (
        <div className="flex flex-col text-md justify-center items-center">
            <p className="text-lg max-w-[70px] overflow-hidden whitespace-nowrap text-ellipsis">
                {weekDay}
            </p>
            <Tooltip>
                <TooltipTrigger>
                    <img
                        src={weatherIcon(icon)}
                        alt="weather icon"
                        className="w-12 h-10"
                    />
                </TooltipTrigger>
                <TooltipContent className="w-fit h-fit py-0 px-2 border-2 border-skeleton bg-subDefault text-white">
                    {description}
                </TooltipContent>
            </Tooltip>
            <div className="text-center">
                <p className="text-minMaxTemp">min.</p>
                <p>
                    {minTemp > 0 ? "+" : "-"}
                    {Math.floor(minTemp)}°
                </p>
            </div>
        </div>
    );
};

export default LeftColumn;
