import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "fenix-theme";
const ThemeContext = createContext(null);

function readInitialTheme() {
    // index.html already set data-theme before React loaded
    const current = document.documentElement.dataset.theme;
    return current === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(readInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // storage unavailable (private mode): theme still works for this visit
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used inside <ThemeProvider>");
    }
    return ctx;
}
