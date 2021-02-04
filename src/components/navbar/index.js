import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './style.module.css'

const Navbar = function ({ isBgActive, isActive, setActive }) {
  const handleClick = () => { setActive(!isActive) }
  return (
    <nav id={s.navbar} className={classNames({ [s.bgActive]: isBgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <button onClick={handleClick} className={classNames(s.container, { [s.active]: isActive })}>
          <div className={s.bar1}></div>
          <div className={s.bar2}></div>
          <div className={s.bar3}></div>
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isBgActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
}

export default Navbar
