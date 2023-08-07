import { getUserAuthData } from "entities/User";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routePath } from "shared/config/routeConfig/routeConfig";

interface RequireAuthProps {
    children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate to={routePath.main} state={{ from: location }} replace />
        );
    }

    return children;
};
