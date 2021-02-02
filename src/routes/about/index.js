import PropTypes from 'prop-types'
import Header from '../../components/header'

function AboutPage ({ onChangePage }) {
  const onHeaderClick = (page) => {
    onChangePage && onChangePage(page)
  }
  return (
    <>
      <Header title='Pokemon Game' desc='About Page' onHeaderClick={onHeaderClick}/>
    </>
  )
}

AboutPage.propTypes = {
  onChangePage: PropTypes.func
}

export default AboutPage
