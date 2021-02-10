import { useState } from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom'

import StartPage from './routes/start'
import BoardPage from './routes/board'
import FinishPage from './routes/finish'

import { PokemonContext } from '../../context/pokemon-context'

function GamePage () {
  const [pokemons, setPokemons] = useState([])
  
  const handlerPokemonsChange = (pokemon) => {
    setPokemons((prevState) => [...prevState, pokemon])
  }

  const match = useRouteMatch()
  return (
    <PokemonContext.Provider value={{ pokemons, onChangePokemon: handlerPokemonsChange }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  )
}

export default GamePage
