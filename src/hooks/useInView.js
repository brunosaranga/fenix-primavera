import { useEffect, useRef, useState } from "react";

// Returns [ref, isInView]. Fires once by default (good for reveal animations).
export function useInView({ threshold = 0.2, rootMargin = "0px", once = true } = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return undefined;
        }
        if (!("IntersectionObserver" in window)) {
            setIsInView(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (once) {
                        observer.disconnect();
                    }
                } else if (!once) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, isInView];
}
