import Layout from "app/Layout";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageError } from "widgets/PageError";

function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <PageError />,
            children: [
                { index: true, element: <MainPage /> },
                { path: "/about", element: <AboutPage /> },
                { path: "*", element: <NotFoundPage /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}
export default AppRouter;
