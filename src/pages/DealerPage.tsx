import { useState } from 'react';

export default function DealerPage() {

    const [name, setName] = useState('');
    const [nMoney, setNMoney] = useState('');
    const [pMoney, setPMoney] = useState('');

    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <button className="rounded-full bg-neutral-300 px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-green-400">+</button>
            <div>
                <input value={name} onChange={e => setName(e.target.value)} className=" text-white bg-gray-700 transition-all border px-4 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />
                <input type='number' value={nMoney} onChange={e => setNMoney(e.target.value)} className="text-red-700 bg-red-300 transition-all border px-4 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />
                <input type='number' value={pMoney} onChange={e => setPMoney(e.target.value)} className="text-green-700 bg-green-300 transition-all border px-4 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />
            </div>

        </div>
    );
}