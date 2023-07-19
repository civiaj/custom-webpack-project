import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/theme/useTheme";
import { classNames } from "../helpers/classNames";

function Layout() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", { focused: true, hovered: false }, ["big", theme])}>
            <button onClick={() => toggleTheme()}>Toggle</button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/main">Main</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}
export default Layout;
