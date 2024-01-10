import { useState, useEffect } from 'react'
import PokemonStat from '../components/Pokemon'

export default function PokemonStuff() {
    const [pokemon, setPokemon] = useState()
    const [text, setText] = useState('');
    async function fetchData() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`);//pokemon far in i api-n så att vi får ret data
        const data = await res.json();
        console.log(data);
        setPokemon(data);
    }
    useEffect(() => {
        fetchData();
    }, [text])
    return (



        <div className="h-screen flex flex-col justify-center items-center ">


            {pokemon && (
                //datan från api förenklas
                <PokemonStat data={pokemon} />
            )}

            <input /*söker pokemon* */ value={text} onChange={e => setText(e.target.value)} className="transition-all border px-4 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2" />


        </div>
    )
}

/*

bulbasaur ivysaur venusaur charmander charmeleon charizard squirtle wartortle blastoise caterpie kakuna beedrill pidgey pidgeotto pidgeot rattata raticate

pikachu
25

* */