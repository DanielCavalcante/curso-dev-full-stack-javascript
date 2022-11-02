import React, { useEffect, useState } from 'react'
import api from '../services/api'

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        recuperarPokemons()
    }, [])

    async function recuperarPokemons() {
        const resposta = await api.get()
        setPokemons(resposta.data.results)
        return resposta
    }

    const renderizarPokemons = () => {
        return pokemons.map(pokemon => (
            <div>
                <h3>{pokemon.name}</h3>
                <h4>{pokemon.url}</h4>    
            </div>
        ))
    }

    return (
        <>
            <h1>Pokemons...</h1>
            {pokemons.length <= 0 ? 'Carregando pokemons' : renderizarPokemons()}
        </>
    )
}

export default Pokemons