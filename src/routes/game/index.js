import { Route, useRouteMatch, Switch } from 'react-router-dom'

import StartPage from './routes/start'
import BoardPage from './routes/board'
import FinishPage from './routes/finish'

function GamePage () {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.path}/`} exact component={StartPage} />
      <Route path={`${match.path}/board`} component={BoardPage} />
      <Route path={`${match.path}/finish`} component={FinishPage} />
    </Switch>
  )
}

export default GamePage
