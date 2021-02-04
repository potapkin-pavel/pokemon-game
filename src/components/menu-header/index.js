import PropTypes from 'prop-types'
import { useState } from 'react'
import Menu from '../menu'
import Navbar from '../navbar'

const MenuHeader = function ({ isBgActive }) {
  const [isActive, setActive] = useState(false)
  return (
    <>
      <Menu isBgActive={isActive} setMenuActive={setActive} />
      <Navbar isBgActive={isActive} setBgActive={setActive} />
    </>
  )
}

MenuHeader.propTypes = {
  isBgActive: PropTypes.bool.isRequired
}

export default MenuHeader
