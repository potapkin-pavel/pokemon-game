import { useState } from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom'

import StartPage from '../start'
import BoardPage from '../board'
import FinishPage from '../finish'

import { PokemonContext } from '../../context/pokemon-context'

function GamePage () {
  const [pokemons, setPokemons] = useState([])
  const [player1Cards, setPlayer1Cards] = useState([])
  const [player2Cards, setPlayer2Cards] = useState([])
  const [gameResult, setGameResult] = useState('')

  const handlerPokemonsChange = (pokemons) => {
    setPokemons(pokemons)
  }
  
  const handlePlayer1Cards = (pokemons) => {
    setPlayer1Cards(pokemons)
  }
  
  const handlePlayer2Cards = (pokemons) => {
    setPlayer2Cards(pokemons)
  }

  const handleGameResult = (gameResult) => {
    setGameResult(gameResult)
  }

  const match = useRouteMatch()
  return (
    <PokemonContext.Provider value={{
      pokemons,
      gameResult,
      onGameResult: handleGameResult,
      onChangePokemon: handlerPokemonsChange,
      onChangePlayer1Cards: handlePlayer1Cards,
      onChangePlayer2Cards: handlePlayer2Cards,
      player1Cards,
      player2Cards
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  )
}

export default GamePage
