import PropTypes from 'prop-types'
import MenuHeader from '../menu-header'
import s from './style.module.css'

const Header = function ({ title, desc, onHeaderClick }) {
  const onMenuHeaderClick = (page) => {
    onHeaderClick && onHeaderClick(page)
  }
  return (
    <header className={s.root}>
      <MenuHeader onMenuHeaderClick={onMenuHeaderClick}/>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </header>
  )
}

Header.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string,
  onHeaderClick: PropTypes.func.isRequired
}

Header.defaultProps = {
  title: 'This is title!',
  desc: 'This is Description!'
}

export default Header
