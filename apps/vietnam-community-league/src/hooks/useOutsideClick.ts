import { useEffect, useState } from "react";

export default function useOutsideClick(ref: any) {
    const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

    useEffect(() => {
        const handleClicked = (event: MouseEvent) => {
            ref.current && !ref.current.contains(event.target) ? setIsClickedOutside(true) : setIsClickedOutside(false);
        };

        document.addEventListener("mousedown", handleClicked);

        return () => {
            document.addEventListener("mousemove", handleClicked);
        };
    }, [ref]);

    return isClickedOutside;
}
