import PropTypes from 'prop-types'

import s from './style.module.css'

const PokemonAddButton = function ({ handlePokemonAddButtonClick, children, isUpperCase }) {
  const onClickHandler = () => {
    handlePokemonAddButtonClick()
  }

  return (
    <button className={s.button} onClick={onClickHandler}>
      { isUpperCase ? children.toUpperCase() : children }
    </button>
  )
}

PokemonAddButton.propTypes = {
  children: PropTypes.string,
  handlePokemonAddButtonClick: PropTypes.func,
  isUpperCase: PropTypes.bool
}

export default PokemonAddButton
