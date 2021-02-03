import PropTypes from 'prop-types'
import Header from '../../components/header'
import MenuHeader from '../../components/menu-header'

function GamePage ({ onChangePage }) {
  const onMenuHeaderClick = (page) => {
    onChangePage && onChangePage(page)
  }
  return (
    <>
      <MenuHeader onMenuHeaderClick={onMenuHeaderClick}/>
      <Header title='Pokemon Game' desc='Game Page'/>
    </>
  )
}

GamePage.propTypes = {
  onChangePage: PropTypes.func
}

export default GamePage
