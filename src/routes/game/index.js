import { useState } from 'react'

import Footer from '../../components/footer'
import Layout from '../../components/layout'
import PokemonCard from '../../components/pokemon-card'

import s from './style.module.css'

import pokemonsArray from '../../data/pokemons.json'

function GamePage () {
  const [pokemons, setPokemons] = useState(pokemonsArray)

  const handleCardClick = (text) => {
    setPokemons(pokemonsArray => pokemonsArray.map(item =>
      item.id === text ? { ...item, isActive: !item.isActive } : item))
  }

  return (
    <>
      <Layout id='1' title='This is Game Page' colorBg='#d4d4d4'>
        <div className={s.flex}>
          {pokemons.map(pokemon =>
            <PokemonCard key={pokemon.id} name={pokemon.name} img={pokemon.img} id={pokemon.id} type={pokemon.type}
              values={pokemon.values} isActive={pokemon.isActive} onCardClick={() => handleCardClick(pokemon.id)}/>)}
        </div>
      </Layout>
      <Footer/>
    </>
  )
}

export default GamePage
