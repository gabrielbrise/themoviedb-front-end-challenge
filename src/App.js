import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import Movie from 'pages/Movie'
import Genre from 'pages/Genre'
import Header from 'components/Header'

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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/top-5/:movie" component={Movie} />
        <Route path="/genre/:genre/:movie" component={Movie} />
        <Route path="/genre/:genre" component={Genre} />
        <Route path="/all/:movie" component={Movie} />
      </Switch>
    </Router>
  )
}

export default App