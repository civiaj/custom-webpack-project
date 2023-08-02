import { RouterProvider } from "react-router-dom";
import { router } from "../config/routerConfig";

function AppRouter() {
    return <RouterProvider router={router} />;
}
export default AppRouter;
