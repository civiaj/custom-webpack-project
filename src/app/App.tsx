import { StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

function App() {
    return (
        <StoreProvider>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </StoreProvider>
    );
}
export default App;
