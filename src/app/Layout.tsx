import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { SuspenseLoader } from "widgets/SuspenseLoader";

function Layout() {
    return (
        <div className="app">
            <Navbar />
            <div className="app-layout">
                <Sidebar />
                <Suspense fallback={<SuspenseLoader />}>
                    <main className="page">
                        <Outlet />
                    </main>
                </Suspense>
            </div>
        </div>
    );
}

export default Layout;
