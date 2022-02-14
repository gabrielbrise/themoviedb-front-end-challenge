import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movie from 'pages/Movie'
import Header from 'components/Header'
import styled from 'styled-components'

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 **/
export const trackInitialLoad = () => {
  console.log('First page load')
}

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 **/
export const trackPageCompletedLoading = () => {
  console.log('Page done loading')
}

const App = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:movie" component={Movie} />
          <Route path="/genre/:genre" exact component={Home} />
          <Route path="/all/:movie" exact component={Home} />
        </Switch>
      </Body>
    </Router>
  )
}

export default App

const Body = styled.div`
  padding-left: 2em;
  padding-right: 2em;
`
