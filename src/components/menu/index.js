import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './style.module.css'
import MenuItem from '../menu-item'

const Menu = function ({ isMenuActive, onMenuClick, setMenuActive }) {
  const pages = [
    {
      path: 'app',
      title: 'home'
    },
    {
      path: 'game',
      title: 'game'
    },
    {
      path: 'about',
      title: 'about'
    },
    {
      path: 'contact',
      title: 'contact'
    }
  ]
  const onLinkClick = (page) => {
    setMenuActive(!isMenuActive)
    onMenuClick && onMenuClick(page)
  }
  return (
    <div className={classNames(s.menuContainer, { [s.active]: isMenuActive }, { [s.deactive]: !isMenuActive })} >
      <div className={s.overlay}/>
      <div className={s.menuItems}>
        <ul>
          {pages.map(page => <MenuItem key={page.path} href={`/${page.path}`} onLinkClick={() => onLinkClick(page.path)}>{page.title.toUpperCase()}</MenuItem>)}
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
