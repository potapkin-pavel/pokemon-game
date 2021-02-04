import PropTypes from 'prop-types'
import classNames from 'classnames'

import MenuItem from '../menu-item'

import s from './style.module.css'

const Menu = function ({ isActive, setActive, pagesList }) {
  const onMenuItemClick = () => {
    setActive(!isActive)
  }
  if (isActive) {
    return (
      <div className={classNames(s.menuContainer, isActive ? [s.active] : [s.deactive])} >
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
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  pagesList: PropTypes.array.isRequired
}

export default Menu
