import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/button'
import Footer from '../../components/footer'
import Layout from '../../components/layout'
import PokemonCard from '../../components/pokemon-card'

import { PokemonContext } from '../../context/pokemon-context'

import Firebase from '../../services/firebase-class'

import s from './style.module.css'

const FinishPage = () => {
  const history = useHistory()
  const firebase = new Firebase()
  const { player1Cards, player2Cards, gameResult } = useContext(PokemonContext)
  const [player2Pokemons, setPlayer2Pokemons] = useState(player2Cards)
  const [selectedPokemon, selectPokemon] = useState({})
    
  const endGame = () => {
    if (gameResult === 'win' && selectedPokemon) {
      firebase.addNewPokemon(selectedPokemon)
    }
    history.push('/game')
  }

  const handleCardClick = (id) => {
    const selectedPokemon = player2Cards.find((pokemon) => pokemon.id === id)
    selectPokemon(selectedPokemon)
    setPlayer2Pokemons((prevState) => prevState.map((pokemon) => {
      pokemon.isSelected = pokemon.id === id
      return pokemon
    }))
  }

  if (player1Cards.length === 0) {
    history.replace('/game')
  }

  return (
    <>
      <Layout id='1' title={gameResult && gameResult} colorBg='#d4d4d4'>
        <div className={s.flex}>
          {player1Cards && player1Cards.map(({ id, img, key, name, type, values }) =>
            <PokemonCard
              key={key}
              className={s.card}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isSelected={false}
            />)}
        </div>
        <div className={s.buttonWrap}>
          <Button handleButtonClick={endGame} isUpperCase={true}>End game</Button>
        </div>
        <div className={s.flex}>
          {player2Pokemons && player2Pokemons.map(({ id, img, name, type, values, isSelected }) =>
            <PokemonCard
              key={id}
              className={s.card}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isSelected={isSelected}
              onCardClick={() => handleCardClick(id)}
            />)}
        </div>
      </Layout>
      <Footer/>
    </>
  )
}

export default FinishPage
