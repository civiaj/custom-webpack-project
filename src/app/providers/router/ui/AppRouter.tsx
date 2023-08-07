import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
    AppRouteProps,
    routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";
import { SuspenseLoader } from "widgets/SuspenseLoader";

function AppRouter() {
    const renderRouter = (route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<SuspenseLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
                key={route.path}
            />
        );
    };
    return <Routes>{Object.values(routeConfig).map(renderRouter)}</Routes>;
}
export default AppRouter;
