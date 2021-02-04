import PropTypes from 'prop-types'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Layout from '../../components/layout'
import bg from '../../assets/bg3.jpg'

const HomePage = function ({ onChangePage }) {
  return (
    <>
      <Header title='Pokemon Card Game' desc='Home Page'/>
      <Layout id='1' title='Rules' urlBg={bg}>
        <p>In the game two players face off against one another, one side
          laying as &quot;blue&quot;, the other as &quot;red&quot; on a 3x3
          grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the
           opponent&apos;s cards by turning them into the player&apos;s own
           color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one
        card that is not placed on the board) must be of the player&apos;s
        card color. To do this, the player must capture cards by placing a
        card adjacent to an opponent&apos;s card whereupon the &lsquo;ranks
        &lsquo; of the sides where the two cards touch will be compared. If
        the rank of the opponent&apos;s card is higher than the player&apos;s
        card, the player&apos;s card will be captured and turned into the
        opponent&apos;s color. If the player&apos;s rank is higher, the
        opponent&apos;s card will be captured and changed into the player
        &apos;s color instead.</p>
      </Layout>
      <Footer/>
    </>
  )
}

HomePage.propTypes = {
  onChangePage: PropTypes.func
}

export default HomePage
