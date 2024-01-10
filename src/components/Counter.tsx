import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1)

    }
    const remove = () => {
        setCount(count - 1)
    }

    // Determine the color class based on the value of count
    const countColorClass = count < 0 ? "text-red-400" : "text-green-400";


    return (
        <div>
            <button onClick={remove} className="px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-red-400">-</button>
            <span className={`mx-4 text-7xl font-medium ${countColorClass}`}>{count}</span>
            <button onClick={add} className="px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-green-400">+</button>
        </div>
    );
}
