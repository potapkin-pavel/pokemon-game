import AboutPage from '../../routes/about'
import ContactPage from '../../routes/contact'
import GamePage from '../../routes/game'
import HomePage from '../../routes/home'

import { useState } from 'react'

const App = function () {
  const [page, setPage] = useState('app')
  const handleChangePage = (page) => {
    setPage(page)
  }
  switch (page) {
    case 'about':
      return <AboutPage onChangePage={(page) => handleChangePage(page)}/>
    case 'contact':
      return <ContactPage onChangePage={handleChangePage}/>
    case 'game':
      return <GamePage onChangePage={handleChangePage}/>
    case 'app':
    default:
      return <HomePage onChangePage={handleChangePage}/>
  }
}

export default App
