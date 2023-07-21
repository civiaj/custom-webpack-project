import { ThemeProvider } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

function App() {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    );
}
export default App;
