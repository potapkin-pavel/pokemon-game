import PropTypes from 'prop-types'

const MenuItem = function ({ href, onLinkClick, children }) {
  const handleLinkClick = () => {
    onLinkClick && onLinkClick()
  }
  return (
    <li>
      <a href={href} onClick={handleLinkClick}>{children}</a>
    </li>
  )
}

MenuItem.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string
}

MenuItem.defaultProps = {
  href: '#'
}

export default MenuItem
