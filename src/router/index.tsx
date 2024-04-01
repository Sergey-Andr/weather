import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Main from "@/pages/DefaultDays";
import CurrentDay from "@/pages/CurrentDay";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Main />} />
            <Route path="/more_info" element={<CurrentDay />} />
        </>,
    ),
);

export default router;
