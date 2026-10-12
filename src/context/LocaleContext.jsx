import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultLocale, locales } from "../content";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState(defaultLocale);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const cycleLocale = useCallback(() => {
        setLocale((prev) => {
            const index = locales.indexOf(prev);
            return locales[(index + 1) % locales.length];
        });
    }, []);

    return (
        <LocaleContext.Provider value={{ locale, locales, setLocale, cycleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) {
        throw new Error("useLocale must be used inside <LocaleProvider>");
    }
    return ctx;
}
