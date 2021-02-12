import { useState } from 'react'
import PropTypes from 'prop-types'

import PokemonCard from '../../../../../../components/pokemon-card'

import classNames from 'classnames'

import s from './style.module.css'

const PlayerBoard = ({ cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null)

  return (
    <>
      {
        cards && cards.map((item) =>
          <div key={item.id} className={classNames({ [s.select]: isSelected === item.id }, s.cardBoard)}
            onClick={() => {
              setSelected(item.id)
              onClickCard && onClickCard(item)
            }}>
              <PokemonCard id={item.id} img={item.img} minimize={true} name={item.name} type={item.type}
                values={item.values} />
          </div>)
      }
    </>
  )
}

PlayerBoard.propTypes = {
  cards: PropTypes.array.isRequired,
  onClickCard: PropTypes.func
}

export default PlayerBoard
