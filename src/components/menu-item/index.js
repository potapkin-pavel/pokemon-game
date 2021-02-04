import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MenuItem = function ({ href, children, onMenuItemClick }) {
  return (
    <li>
      <Link to={href} onClick={onMenuItemClick}>{children}</Link>
    </li>
  )
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onMenuItemClick: PropTypes.func
}

MenuItem.defaultProps = {
  href: '#'
}

export default MenuItem
