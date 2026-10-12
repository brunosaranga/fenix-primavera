import { useEffect, useState } from "react";

// Prefer CSS media queries for layout. Use this only when JS behaviour must change.
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = (event) => setMatches(event.matches);
        setMatches(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}
