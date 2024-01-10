import { useState } from 'react';
import Counter from "../components/Counter";

export default function CounterPage() {

    const [name, setName] = useState('');

    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <Counter />
            <div>
                <input value={name} onChange={e => setName(e.target.value)} className="transition-all border px-4 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />
                <h3 className="text-4xl font bold">sup {name}</h3>
            </div>
        </div>
    );
}
