import { useEffect, useState } from 'react'

import Footer from '../../components/footer'
import Layout from '../../components/layout'
import PokemonCard from '../../components/pokemon-card'

import database from '../../services/firebase'

import s from './style.module.css'

function GamePage () {
  const [pokemons, setPokemons] = useState({})

  const handleCardClick = (key, id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.active = !(pokemon.active)
          database.ref('pokemons/' + key).set(pokemon)
        }
        acc[item[0]] = pokemon
        return acc
      }, {})
    })
  }

  useEffect(() => {
    database.ref('pokemons').on('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  return (
    <>
      <Layout id='1' title='This is Game Page' colorBg='#d4d4d4'>
        <div className={s.flex}>
          {Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) =>
            <PokemonCard key={key} name={name} img={img} id={id} type={type} values={values} isActive={active}
              onCardClick={() => handleCardClick(key, id)}/>)}
        </div>
      </Layout>
      <Footer/>
    </>
  )
}

export default GamePage
