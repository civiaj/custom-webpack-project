import { AppRouter } from "app/providers/router";
import { useEffect } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch, useAppSelector } from "./providers/StoreProvider";
import { getUserInited, userActions } from "entities/User";

function App() {
    const dispatch = useAppDispatch();
    const inited = useAppSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuth());
    }, [dispatch]);

    return (
        <div className="app">
            <Navbar />
            <div className="app-layout">
                <Sidebar />
                <main className="wrapper">
                    <div className="page">{inited && <AppRouter />}</div>
                </main>
            </div>
        </div>
    );
}
export default App;
