import { useEffect, useState } from "react";

export interface ScrollPosition {
    x: number;
    y: number;
}

export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

    useEffect(() => {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });

        const handleScroll = () => {
            setScrollPosition({ x: window.scrollX, y: window.scrollY });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
}
