import PropTypes from 'prop-types'
import classNames from 'classnames'

import MenuItem from '../menu-item'

import s from './style.module.css'

const Menu = function ({ isBgActive, setMenuActive, pagesList }) {
  const onMenuItemClick = () => {
    setMenuActive(!isBgActive)
  }
  if (isBgActive) {
    return (
      <div className={classNames(s.menuContainer, isBgActive ? [s.active] : [s.deactive])} >
        <div className={s.overlay}/>
        <div className={s.menuItems}>
          <ul>
            {pagesList.map(page =>
              <MenuItem key={page.path} href={`/${page.path}`} onMenuItemClick={onMenuItemClick}>
                {page.title.toUpperCase()}
              </MenuItem>)}
          </ul>
        </div>
      </div>
    )
  } else return <></>
}

Menu.propTypes = {
  isBgActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
  pagesList: PropTypes.array.isRequired
}

export default Menu
