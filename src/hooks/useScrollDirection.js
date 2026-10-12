import { useEffect, useState } from "react";

// Tracks scroll direction + whether the page is past `offset`.
// Used by the navbar to shrink on scroll down and expand on scroll up.
export function useScrollDirection({ offset = 80, threshold = 6 } = {}) {
    const [state, setState] = useState({ direction: "up", scrolled: false });

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const update = () => {
            const y = window.scrollY;
            const diff = y - lastY;

            if (Math.abs(diff) >= threshold) {
                setState({
                    direction: diff > 0 ? "down" : "up",
                    scrolled: y > offset,
                });
                lastY = y;
            } else if ((y > offset) !== (lastY > offset)) {
                setState((prev) => ({ ...prev, scrolled: y > offset }));
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset, threshold]);

    return state;
}
