import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { LocaleProvider } from "./context/LocaleContext";
import { ContactModalProvider } from "./context/ContactModalContext";
import { routerConfig } from "./routes";

const router = createBrowserRouter(routerConfig);

export default function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <LocaleProvider>
                    <ContactModalProvider>
                        <RouterProvider router={router} />
                    </ContactModalProvider>
                </LocaleProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}
