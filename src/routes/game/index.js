import PropTypes from 'prop-types'
import Header from '../../components/header'

function GamePage ({ onChangePage }) {
  const onHeaderClick = (page) => {
    onChangePage(page)
  }
  return (
    <>
      <Header title='Pokemon Game' desc='Game Page' onHeaderClick={onHeaderClick}/>
    </>
  )
}

GamePage.propTypes = {
  onChangePage: PropTypes.func
}

export default GamePage
