import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './style.module.css'

const Navbar = function ({ isBgActive, setBgActive }) {
  const handleClick = () => { setBgActive(!isBgActive) }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <button onClick={handleClick} className={classNames(s.container, { [s.active]: isBgActive })}>
          <div className={s.bar1}></div>
          <div className={s.bar2}></div>
          <div className={s.bar3}></div>
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isBgActive: PropTypes.bool.isRequired,
  setBgActive: PropTypes.func.isRequired
}

export default Navbar
