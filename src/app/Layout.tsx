import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { SuspenseLoader } from "widgets/SuspenseLoader";
import { useAppDispatch } from "./providers/StoreProvider";
import { useEffect } from "react";
import { userActions } from "entities/User";

function Layout() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuth());
    }, [dispatch]);

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
