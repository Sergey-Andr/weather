import { FC, ReactElement, ReactNode } from "react";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

interface IDefaultLayout {
    children: ReactNode;
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }): ReactElement => {
    return (
        <div className="max-w-dvw min-h-dvh h-full bg-default">
            <div className="w-[1115px] h-full pt-5 m-auto">
                <Header />
                <SubHeader />
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
