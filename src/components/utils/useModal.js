import { useState } from "react";

export default function useModal() {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(isShowing => !isShowing);
    }

    return {
        isShowing,
        toggle
    };
};