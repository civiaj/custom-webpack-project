import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "app/Layout";
import "app/styles/index.scss";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

function App() {
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
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
export default App;
