import PropTypes from 'prop-types'

import s from './style.module.css'

const PokemonAddButton = function ({ handleButtonClick, children, isUpperCase }) {
  const onClickHandler = () => {
    handleButtonClick()
  }

  return (
    <button className={s.button} onClick={onClickHandler}>
      { isUpperCase ? children.toUpperCase() : children }
    </button>
  )
}

PokemonAddButton.propTypes = {
  children: PropTypes.string,
  handleButtonClick: PropTypes.func,
  isUpperCase: PropTypes.bool
}

export default PokemonAddButton
