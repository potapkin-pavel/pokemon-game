import PropTypes from 'prop-types'
import Header from '../../components/header'

function ContactPage ({ onChangePage }) {
  const onHeaderClick = (page) => {
    onChangePage && onChangePage(page)
  }
  return (
    <>
      <Header title='Pokemon Game' desc='Contact Page' onHeaderClick={(page) => onHeaderClick(page)}/>
    </>
  )
}

ContactPage.propTypes = {
  onChangePage: PropTypes.func
}

export default ContactPage
