import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './style.module.css'
import MenuItem from '../menu-item'

const Menu = function ({ isMenuActive, onMenuClick, setMenuActive }) {
  const onLinkClick = (page) => {
    setMenuActive(!isMenuActive)
    onMenuClick && onMenuClick(page)
  }
  return (
    <div className={classNames(s.menuContainer, { [s.active]: isMenuActive }, { [s.deactive]: !isMenuActive })} >
      <div className="overlay" />
      <div className="menuItems">
        <ul>
          <MenuItem href={'#welcome'} onLinkClick={() => onLinkClick('app')}>HOME</MenuItem>
          <MenuItem href={'#game'} onLinkClick={() => onLinkClick('game')}>GAME</MenuItem>
          <MenuItem href={'#about'} onLinkClick={() => onLinkClick('about')}>ABOUT</MenuItem>
          <MenuItem href={'#contact'} onLinkClick={() => onLinkClick('contact')}>CONTACT</MenuItem>
        </ul>
      </div>
    </div>
  )
}

Menu.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  setMenuActive: PropTypes.func.isRequired
}

export default Menu
