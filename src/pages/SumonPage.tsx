//import Sumon from "../components/Sumon";
import { useState } from "react";


export default function SumonPage() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState<number | undefined>()

    const add = () => {
        setResult(Number(number1) + Number(number2))
    }
    const remove = () => {
        setResult(Number(number1) - Number(number2))
    }
    const multi = () => {
        setResult(Number(number1) * Number(number2))
    }
    const devide = () => {
        setResult(Number(number1) / Number(number2))
    }


    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="max-w-sm">
                <div className="flex flex-row max-w-sm">
                    <label className="w-full flex flex-col">
                        <span className="fonst-medium">count1</span>
                        <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} className="w-40  text-4xl transition-all border px-1 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />
                    </label>
                    <label className="w-full flex flex-col">
                        <span className="fonst-medium">count2</span>
                        <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} className="w-40 text-4xl transition-all border px-1 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />
                    </label>
                </div>
                <button onClick={add} className="rounded-full bg-neutral-300 px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-green-400">+</button>
                <button onClick={remove} className="rounded-full bg-neutral-300 px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-green-400">-</button>
                <button onClick={multi} className="rounded-full bg-neutral-300 px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-green-400">*</button>
                <button onClick={devide} className="rounded-full bg-neutral-300 px-4 text-6xl  py-2 border rounded hover:bg-cyan-100 text-green-400">÷</button>

            </div>
            <div>

                <h3 className="text-4xl font bold">{result}</h3></div>
        </div>
    );
}
