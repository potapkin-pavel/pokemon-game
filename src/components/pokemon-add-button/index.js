import PropTypes from 'prop-types'

import s from './style.module.css'

const PokemonAddButton = function ({ handlePokemonAddButtonClick }) {
  const onClickHandler = () => {
    handlePokemonAddButtonClick()
  }

  return (
    <button className={s.button} onClick={onClickHandler}>
      {'add new pokemon'.toUpperCase()}
    </button>
  )
}

PokemonAddButton.propTypes = {
  handlePokemonAddButtonClick: PropTypes.func
}

export default PokemonAddButton
