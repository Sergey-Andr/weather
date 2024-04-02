import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import Main from "@/pages/DefaultDays";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Main />
        </TooltipProvider>
    </QueryClientProvider>,
);
