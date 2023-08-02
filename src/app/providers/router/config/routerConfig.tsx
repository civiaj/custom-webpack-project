import Layout from "app/Layout";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { createBrowserRouter } from "react-router-dom";
import { PageError } from "widgets/PageError";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <PageError />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/profile", element: <ProfilePage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);
