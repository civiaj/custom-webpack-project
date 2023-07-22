import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

function Layout() {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="app-layout">
                <Sidebar />
                <Suspense fallback={<div>Loading...</div>}>
                    <main className="page">
                        <Outlet />
                    </main>
                </Suspense>
            </div>
        </div>
    );
}

export default Layout;
