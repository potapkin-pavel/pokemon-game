import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './style.module.css'

const Navbar = function ({ isBurgerActive, setBurgerActive }) {
  const handleClick = () => { setBurgerActive(!isBurgerActive) }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <button onClick={handleClick} className={classNames(s.container, { [s.active]: isBurgerActive })}>
          <div className={s.bar1}></div>
          <div className={s.bar2}></div>
          <div className={s.bar3}></div>
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isBurgerActive: PropTypes.bool.isRequired,
  setBurgerActive: PropTypes.func.isRequired
}

export default Navbar
