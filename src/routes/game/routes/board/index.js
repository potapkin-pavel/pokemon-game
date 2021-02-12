import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import PokemonCard from '../../../../components/pokemon-card'

import s from './style.module.css'

import { PokemonContext } from '../../../../context/pokemon-context'

const BoardPage = () => {
  const [board, setBoard] = useState([])
  const [player2, setPlayer2] = useState([])
  const { pokemons } = useContext(PokemonContext)
  const history = useHistory()

  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board')
    const boardRequest = await boardResponse.json()
    
    setBoard(boardRequest.data)

    const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
    const player2Request = await player2Response.json()

    setPlayer2(player2Request.data)
  }, [])

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game')
  }

  const handleClickBoardPlate = (position) => {
    console.log('####: position', position)
  }

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {
          pokemons && pokemons.map(({ id, img, name, type, values }) =>
            <PokemonCard className={s.card} id={id} img={img} key={id}  minimize={true} name={name} type={type}
              values={values} />)
        }
      </div>
      <div className={s.board}>
        {
          board.map((item) => (
            <div key={item.position} className={s.boardPlate}
              onClick={ () => !item.card && handleClickBoardPlate(item.position) }>
                { item.card && <PokemonCard {...item} minimize={true} /> }
            </div>
          ))
        }
      </div>
      <div className={s.playerTwo}>
        {
          player2 && player2.map(({ id, img, name, type, values }) =>
            <PokemonCard className={s.card} id={id} img={img} key={id}  minimize={true} name={name} type={type}
              values={values} />)
        }
      </div>
    </div>
  )
}

export default BoardPage
