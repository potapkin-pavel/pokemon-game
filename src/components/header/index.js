import PropTypes from 'prop-types'

import s from './style.module.css'

const Header = function ({ title, desc }) {
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </header>
  )
}

Header.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'This is title!',
  desc: 'This is Description!'
}

export default Header
