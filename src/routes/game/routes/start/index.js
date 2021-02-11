import { useContext, useEffect, useState } from 'react'

import Footer from '../../../../components/footer'
import Layout from '../../../../components/layout'
import Button from '../../../../components/button'
import PokemonCard from '../../../../components/pokemon-card'

import Firebase from '../../../../services/firebase-class'

import { PokemonContext } from '../../../../context/pokemon-context'

import s from './style.module.css'
import { useHistory } from 'react-router-dom'

function StartPage () {
  const history = useHistory()
  const pokemonContext = useContext(PokemonContext)
  const [pokemons, setPokemons] = useState({})

  const firebase = new Firebase()

  useEffect(() => {
    firebase.getPokemonsOnce().then((pokemons) => {
      setPokemons(pokemons)
    })
  }, [])

  const goToBoard = () => {
    const selectedPokemons = Object.entries(pokemons).map(([key, pokemon]) => ({ key, ...pokemon }))
      .filter((pokemon) => pokemon.isSelected === true)
    pokemonContext.onChangePokemon(selectedPokemons)
    history.push('/game/board')
  }

  const handleCardClick = (key) => {
    const pokemon = { ...pokemons[key] }
    pokemon.isSelected = !pokemon.isSelected
    setPokemons(prevState => ({ ...prevState, [key]: pokemon }))
  }

  return (
    <>
      <Layout id='1' title='This is Game Page' colorBg='#d4d4d4'>
        <div className={s.flex}>
          {Object.entries(pokemons).map(([key, { name, img, id, type, values, isSelected }]) =>
            <PokemonCard key={key} name={name} img={img} id={id} type={type} values={values} isSelected={isSelected}
              onCardClick={() => handleCardClick(key, id)} className={s.card} />)}
        </div>
        <Button handlePokemonAddButtonClick={goToBoard} isUpperCase={true}>Go to board</Button>
      </Layout>
      <Footer/>
    </>
  )
}

export default StartPage
