import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table.tsx";
import { memo, ReactElement } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { selectActiveDayData } from "@/components/WeatherContent/store/useActiveDayDataStore.ts";
import { selectTheme } from "@/store/themeStore.ts";

const WeatherActiveDayData = (): ReactElement => {
    const activeDayData = selectActiveDayData();
    const theme = selectTheme();
    return (
        <Table>
            <TableHeader
                className={`${theme === "dark" ? "bg-subDefault" : "bg-subDefaultBrightMode"}`}
            >
                <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    {activeDayData.map((day) => (
                        <TableHead
                            key={day.dt_txt.slice(11, 16)}
                            className="text-center"
                        >
                            {day.dt_txt.slice(11, 16)}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium text-left">
                        Temperature
                    </TableCell>
                    {activeDayData.map((day) => (
                        <TableCell key={`temperature-${day.dt}`}>
                            {day.main.temp}
                        </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium text-left">
                        Feels like
                    </TableCell>
                    {activeDayData.map((day) => (
                        <TableCell key={`feelsLike-${day.dt}`}>
                            {day.main.feels_like}
                        </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium text-left flex items-end">
                        Pressure
                        <p className="text-tableDetails text-sm ml-2">mm</p>
                    </TableCell>
                    {activeDayData.map((day) => (
                        <TableCell key={`pressure-${day.dt}`}>
                            {day.main.pressure}
                        </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium text-left flex items-end">
                        Humidity
                        <p className="text-tableDetails text-sm ml-2">%</p>
                    </TableCell>
                    {activeDayData.map((day) => (
                        <TableCell key={`humidity-${day.dt}`}>
                            {day.main.humidity}
                        </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium text-left flex items-end">
                        Wind
                        <p className="text-tableDetails text-sm ml-2">m/s</p>
                    </TableCell>
                    {activeDayData.map((day) => (
                        <TableCell key={`windMS-${day.dt}`}>
                            {day.wind.speed}
                        </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium text-left flex items-end">
                        Wind
                        <p className="text-tableDetails text-sm ml-2">deg</p>
                    </TableCell>
                    {activeDayData.map((day) => (
                        <TableCell key={`windDeg-${day.dt}`}>
                            <FaArrowUp
                                className="m-auto w-5 h-5"
                                style={{ rotate: `${day.wind.deg}deg` }}
                            />
                        </TableCell>
                    ))}
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default memo(WeatherActiveDayData);
