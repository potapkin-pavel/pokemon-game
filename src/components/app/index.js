import { Redirect, Route, useRouteMatch, Switch } from 'react-router-dom'
import classNames from 'classnames'

import AboutPage from '../../routes/about'
import ContactPage from '../../routes/contact'
import GamePage from '../../routes/game'
import HomePage from '../../routes/home'
import MenuHeader from '../../components/menu-header'
import NotFoundPage from '../../routes/not-found'

import s from './style.module.css'

const App = function () {
  const match = useRouteMatch('/')
  return (
      <Switch>
        <Route path='/404' component={NotFoundPage}/>
        <Route>
          <>
            <MenuHeader isBgActive={!match.isExact}/>
            <div className={classNames(s.wrap, { [s.isHomePage]: match.isExact })}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route render={() => <Redirect to='/404'/>}/>
              </Switch>
            </div>
          </>
        </Route>
      </Switch>
  )
}

export default App
