import PropTypes from 'prop-types'
import { useState } from 'react'
import Menu from '../menu'
import Navbar from '../navbar'

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

const MenuHeader = function ({ isBgActive }) {
  const [isActive, setActive] = useState(isBgActive)
  return (
    <>
      <Menu isBgActive={isActive} setMenuActive={setActive} pagesList={pages}/>
      <Navbar isBgActive={isActive} setBgActive={setActive} />
    </>
  )
}

MenuHeader.propTypes = {
  isBgActive: PropTypes.bool.isRequired
}

export default MenuHeader
