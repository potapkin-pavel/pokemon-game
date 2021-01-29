import Header from '../header'
import Layout from '../layout'
import Footer from '../footer'
import bg from '../../assets/bg3.jpg'

function App () {
  return (
    <>
      <Header title='Title' desc='Description'/>
      <Layout id='1' title='Title' desc='Description' urlBg={bg} />
      <Layout id='2' title='Title' desc='Description' colorBg='#d4d4d4' />
      <Layout id='3' title='Title' desc='Description' urlBg={bg} />
      <Footer />
    </>
  )
}

export default App
