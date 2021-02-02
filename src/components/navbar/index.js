import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './style.module.css'

const Navbar = function ({ isBurgerActive, setBurgerActive }) {
  const handleClick = () => { setBurgerActive(!isBurgerActive) }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div onClick={handleClick}>
          <a className={classNames(s.menuButton, { [s.active]: isBurgerActive })}>
            <span />
          </a>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isBurgerActive: PropTypes.bool.isRequired,
  setBurgerActive: PropTypes.func.isRequired
}

export default Navbar
