import PropTypes from 'prop-types'
import s from './style.module.css'

const Layout = function ({ id, title, urlBg, colorBg, children }) {
  const styleObj = {
    backgroundImage: urlBg && `url(${urlBg})`,
    backgroundColor: colorBg && colorBg
  }
  return (
    <section className={s.root} id={id} style={styleObj}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorBg: PropTypes.string,
  urlBg: PropTypes.string,
  children: PropTypes.any
}

export default Layout
