import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames";

function Layout() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", { hovered: true, clicked: true }, [theme])}>
            <button onClick={() => toggleTheme()}>Toggle Theme</button>
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}
export default Layout;
