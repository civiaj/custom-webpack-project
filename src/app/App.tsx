import { AppRouter } from "app/providers/router";
import { getUserInited, userActions } from "entities/User";
import { useEffect } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch, useAppSelector } from "./providers/StoreProvider";

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
                {inited && <AppRouter />}
            </div>
        </div>
    );
}
export default App;
