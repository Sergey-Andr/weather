import { FC, ReactElement } from "react";
import moment from "moment/moment";

interface IRightColumn {
    maxTemp: number;
    dtTxt: string;
}

const RightColumn: FC<IRightColumn> = ({ maxTemp, dtTxt }): ReactElement => {
    const month = moment(dtTxt).format("MMMM");
    return (
        <div className="flex flex-col justify-center items-center text-md">
            <p className="text-lg">{month}</p>
            <h2 className="text-3xl">{dtTxt.slice(8, 10)}</h2>
            <div className="text-center">
                <p className="text-minMaxTemp">max.</p>
                <p>
                    {maxTemp > 0 ? "+" : "-"}
                    {Math.floor(maxTemp)}°
                </p>
            </div>
        </div>
    );
};

export default RightColumn;
