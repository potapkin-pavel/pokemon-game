import { useEffect, useState } from 'react'

import Footer from '../../components/footer'
import Layout from '../../components/layout'
import PokemonAddButton from '../../components/pokemon-add-button'
import PokemonCard from '../../components/pokemon-card'

import database from '../../services/firebase'

import s from './style.module.css'

function GamePage () {
  const [pokemons, setPokemons] = useState({})

  const addRandomPokemon = () => {
    const newKey = database.ref().child('posts').push().key
    console.log('#### new key for pokemon: ', newKey)
    console.log('#### pokemons: ', pokemons)
    const pokemon = {
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
      base_experience: 122,
      height: 11,
      id: Math.floor(Math.random() * Math.floor(100)),
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
      name: 'pidgeotto',
      stats: {
        attack: 60,
        defense: 55,
        hp: 63,
        'special-attack': 50,
        'special-defense': 50,
        speed: 71
      },
      type: 'flying',
      values: {
        bottom: 7,
        left: 5,
        right: 2,
        top: 'A'
      }
    }
    database.ref('pokemons/' + newKey).set(pokemon).then(setPokemons(prevState => ({
      ...prevState,
      [newKey]: pokemon
    }))).catch(err => console.error(err))
  }

  const handleCardClick = (key) => {
    const pokemon = { ...pokemons[key] }
    pokemon.active = !pokemon.active
    database.ref('pokemons/' + key).set(pokemon).then(setPokemons(prevState => ({
      ...prevState,
      [key]: pokemon
    }))).catch(err => console.error(err))
  }

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  return (
    <>
      <Layout id='1' title='This is Game Page' colorBg='#d4d4d4'>
        <PokemonAddButton handlePokemonAddButtonClick={addRandomPokemon}/>
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
