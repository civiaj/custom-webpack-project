import Layout from "app/Layout";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    element: <MainPage />,
                    path: "/",
                },
                {
                    element: <AboutPage />,
                    path: "/about",
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}
export default AppRouter;
