import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./compontents/Layout";
import MainPageAsync from "./pages/MainPage.async";
import AboutPageAsync from "./pages/AboutPage.async";
import ThemeContextProvider from "./context/theme/ThemeContextProvider";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    element: <Navigate to="/main" replace />,
                    index: true,
                },
                {
                    element: <MainPageAsync />,
                    path: "/main",
                },
                {
                    element: <AboutPageAsync />,
                    path: "/about",
                },
            ],
        },
    ]);

    return (
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
}
export default App;
