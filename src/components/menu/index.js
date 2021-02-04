import PropTypes from 'prop-types'
import classNames from 'classnames'

import MenuItem from '../menu-item'

import s from './style.module.css'

const Menu = function ({ isBgActive, setMenuActive }) {
  const onMenuItemClick = () => {
    setMenuActive(!isBgActive)
  }

  const pages = [
    {
      path: 'home',
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

  return (
    <div className={classNames(s.menuContainer, { [s.active]: isBgActive }, { [s.deactive]: !isBgActive })} >
      <div className={s.overlay}/>
      <div className={s.menuItems}>
        <ul>
          {pages.map(page =>
            <MenuItem key={page.path} href={`/${page.path}`} onMenuItemClick={onMenuItemClick}>
              {page.title.toUpperCase()}
            </MenuItem>)}
        </ul>
      </div>
    </div>
  )
}

Menu.propTypes = {
  isBgActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired
}

export default Menu
