import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import PokemonCard from '../../components/pokemon-card'
import PlayerBoard from '../../components/player-board'

import s from './style.module.css'

import { PokemonContext } from '../../context/pokemon-context'

const counterWin = (board, player1, player2) => {
  let player1Count = player1.length
  let player2Count = player2.length
  board.forEach((item) => {
    if (item.card.possession === 'red') {
      player2Count++
    } else if (item.card.possession === 'blue') {
      player1Count++
    }
  })
  return [player1Count, player2Count]
}

const BoardPage = () => {
  const { pokemons, onChangePlayer1Cards, onChangePlayer2Cards, onGameResult } = useContext(PokemonContext)

  const [board, setBoard] = useState([])
  const [player1, setPlayer1] = useState(() => {
    const player1Cards = Object.values(pokemons).map((item) => ({
      ...item,
      possession: 'blue'
    }))
    onChangePlayer1Cards(player1Cards)
    return player1Cards
  })
  const [player2, setPlayer2] = useState([])
  const [chosenCard, setChosenCard] = useState(null)
  const [steps, setSteps] = useState(0)

  const history = useHistory()

  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board')
    const boardRequest = await boardResponse.json()
    
    setBoard(boardRequest.data)

    const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
    const player2Request = await player2Response.json()

    setPlayer2(() => {
      const player2Cards = player2Request.data.map((item) => ({
        ...item,
        possession: 'red'
      }))
      onChangePlayer2Cards(player2Cards)
      return player2Cards
    })
  }, [])

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game')
  }

  const handleClickBoardPlate = async (position) => {
    if (chosenCard) {
      const params = {
        position,
        card: chosenCard,
        board
      }

      const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })

      const request = await res.json()

      if (chosenCard.player === 1) {
        setPlayer1((prevState) => prevState.filter((item) => item.id !== chosenCard.id))
      }

      if (chosenCard.player === 2) {
        setPlayer2((prevState) => prevState.filter((item) => item.id !== chosenCard.id))
      }

      setBoard(request.data)
      setSteps((prevState) => prevState + 1)
    }
  }

  useEffect(() => {
    if (steps === 9) {
      console.log('####: Game is finished.')
      const [count1, count2] = counterWin(board, player1, player2)
      if (count1 > count2) {
        onGameResult('win')
      } else if (count2 > count1) {
        onGameResult('lose')
      } else {
        onGameResult('draw')
      }
      history.replace('/game/finish')
    }
  }, [steps])

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
          <PlayerBoard player={1} cards={ player1 } onClickCard={(card) => setChosenCard(card)} />
      </div>
      <div className={s.board}>
        {
          board.map((item) => (
            <div key={item.position} className={s.boardPlate}
              onClick={ () => !item.card && handleClickBoardPlate(item.position) }>
                { item.card && <PokemonCard {...item.card } minimize={true} /> }
            </div>
          ))
        }
      </div>
      <div className={s.playerTwo}>
        <PlayerBoard player={2} cards={ player2 } onClickCard={(card) => setChosenCard(card)} />
      </div>
    </div>
  )
}

export default BoardPage
