import { FC, ReactElement, ReactNode } from "react";
import Header from "@/components/Header";
import { selectTheme } from "@/store/themeStore.ts";

interface IDefaultLayout {
    children: ReactNode;
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }): ReactElement => {
    const theme = selectTheme();
    return (
        <div
            className={`max-w-dvw min-h-dvh h-full bg-default ${theme === "dark" ? "bg-default" : "bg-defaultBrightMode"} transition-all`}
        >
            <div className="w-[1115px] h-full pt-5 m-auto">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
