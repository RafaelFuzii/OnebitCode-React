import { useState } from "react";

function getInitialValue(){
    return 1 + 1
}

export default function userCounter(){
    const [count, setCount] = useState(() => getInitialValue())

    const increment = () => {
        setCount((curentState) => curentState + 1) 
        setCount((curentState) => curentState + 1) 
    }
    return {count, increment}
}