import { useCallback, useState } from "react";

export function useCount(initialValue) {
    let [count, setCount] = useState(initialValue);

    const decrement = useCallback(
        () => {setCount((currCount) => currCount - 1)},
        []
    );
    const increment = useCallback(
        () => {setCount((currCount) => currCount + 1)},
        []
    );

    return { count, decrement, increment }
}