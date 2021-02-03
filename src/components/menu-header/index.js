import PropTypes from 'prop-types'
import { useState } from 'react'
import Menu from '../menu'
import Navbar from '../navbar'

const MenuHeader = function ({ onMenuHeaderClick }) {
  const [isActive, setActive] = useState(false)
  const onMenuClick = (page) => {
    onMenuHeaderClick && onMenuHeaderClick(page)
  }
  return (
    <>
      <Menu isMenuActive={isActive} setMenuActive={setActive}
        onMenuClick={onMenuClick}/>
      <Navbar isBurgerActive={isActive} setBurgerActive={setActive} />
    </>
  )
}

MenuHeader.propTypes = {
  onMenuHeaderClick: PropTypes.func.isRequired
}

export default MenuHeader
