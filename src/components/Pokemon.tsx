import React from 'react'

type PokemonData = {
    data: {
        id: number
        name: string
        weight: string
        height: string
        base_experience: number
        sprites: {
            front_default: string
        }
    }
}



export default function PokemonStat({ data }: PokemonData) {
    if (data.name) return (
        <div>
            <h1 className="text-center p-2 bg-rose-700 text-gray-50 border-black text-5xl border-4 rounded-lg"><strong></strong>{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} width="300" className="border-4 border-gray-500 rounded-lg"></img>
            <h1 className="border-4 bg-green-500 rounded-lg">name: {data.name}</h1>
            <h1 className="border-4 bg-blue-500 rounded-lg">base experience: {data.base_experience}</h1>
            <h1 className="border-4 bg-purple-500 rounded-lg">weight: {data.weight}</h1>
            <h1 className="border-4 bg-yellow-500 rounded-lg">height: {data.height}ft</h1>
            <h1 className="border-4 bg-red-500 rounded-lg">pokemon id: {data.id}</h1>
        </div >
    )
    else {
        return (
            <div>
                <h1>search id or name</h1>
            </div>
        )
    }
}