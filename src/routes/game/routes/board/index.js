import { useContext } from 'react'

import PokemonCard from '../../../../components/pokemon-card'

import s from './style.module.css'

import { PokemonContext } from '../../../../context/pokemon-context'

const BoardPage = () => {
  const pokemonContext = useContext(PokemonContext)
  
  console.log(pokemonContext)

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {pokemonContext.pokemons.map(({ name, img, id, type, values }) =>
            <PokemonCard key={id} name={name} img={img} id={id} type={type} values={values} className={s.card}
              minimize={true}/>)}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  )
}

export default BoardPage
