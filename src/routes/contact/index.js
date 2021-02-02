import PropTypes from 'prop-types'
import Header from '../../components/header'
import MenuHeader from '../../components/menu-header'

function ContactPage ({ onChangePage }) {
  const onMenuHeaderClick = (page) => {
    onChangePage && onChangePage(page)
  }
  return (
    <>
      <MenuHeader onMenuHeaderClick={onMenuHeaderClick}/>
      <Header title='Pokemon Game' desc='Contact Page'/>
    </>
  )
}

ContactPage.propTypes = {
  onChangePage: PropTypes.func
}

export default ContactPage
