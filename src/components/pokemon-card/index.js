import PropTypes from 'prop-types'

import classNames from 'classnames'

import s from './style.module.css'

const PokemonCard = function ({
  className, isActive, id, img, isSelected, name, minimize, onCardClick, possession, type, values
}) {
  return (
    <div className={classNames(className, s.pokemonCard, { [s.active]: isActive }, { [s.selected]: isSelected })}
      onClick={onCardClick}>
      <div className={s.cardFront}>
        <div className={classNames(s.wrap, s.front)}>
          <div className={classNames(s.pokemon, s[type], s[possession])}>
            <div className={s.values}>
              <div className={classNames(s.count, s.top)}>{values.top}</div>
              <div className={classNames(s.count, s.right)}>{values.right}</div>
              <div className={classNames(s.count, s.bottom)}>{values.bottom}</div>
              <div className={classNames(s.count, s.left)}>{values.left}</div>
            </div>
            <div className={s.imgContainer}>
              <img src={img} alt={name} />
            </div>
            { !minimize && (<div className={s.info}>
              <span className={s.number}>#{id}</span>
              <h3 className={s.name}>
                {name}
              </h3>
              <small className={s.type}>
                Type: <span>{type}</span>
              </small>
            </div>) }
          </div>
        </div>
      </div>
      <div className={s.cardBack}>
          <div className={classNames(s.wrap, s.back)} />
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  minimize: PropTypes.bool,
  onCardClick: PropTypes.func,
  possession: PropTypes.string,
  type: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired
}

PokemonCard.defaultProps = {
  isActive: true
}

export default PokemonCard
