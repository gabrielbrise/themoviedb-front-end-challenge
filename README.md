# Front-end Exercise

Thank you for taking the time to complete this assessment. This application contains the necessary starting grounds for you to complete the tasks as outlined below. Please take as much time as you feel is necessary to demonstrate your ability. Unless otherwise stated, you are expected to document and test along the way as you see fit.

## Project Description

This application matches design mock-ups that were given as part of a challenge to showcase front-end skills.

### Top 5 Movies

Top 5 movies section shows the movies with the best average in the database that pass a certain threshold to avoid unpopular movies with few votes but high average to top the list.

- `maxVoteCount` takes the movie with the largest amount of votes to use as base for most popular movie (in terms of voting).
- `VOTE_COUNT_THRESHOLD = 0.2` servers to filter out movies that have less than 20% of the vote count of the `maxVoteCount`.

```js
// src\rest\useFetchAllMovies.js

const getTopMovies = res => {
  const movies = [...res]
  const popularMovies = filterUnpopularMovies(movies, maxVoteCount(movies))
  setTopMovies(sortByVoteAverage(popularMovies))
  return res
}
```

### Routes

Routing was done client-side with the use of `react-router-dom`. This was choosen because it is a well-know solution for React applications. In case of a more complex project I would suggest the usage of `NextJs` to help manage dynamic routes with more ease and allow better scalability. The routes are divided between:

- `/` - this is the Home, where we can see all 3 sections (Top 5 Movies, Genres and Browse All)
- `/top-5/:movie` - movie info about one of the Top 5 movies with a `BackButton` to the Home
- `/genre/:genre` - movie list of all movies that includes this genre
- `/genre/:genre/:movie` - movie info with a `BackButton` that takes you back to the genre page
- `/all/:movie` - movie info of a movie found throught the Browse All section

```js
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
```

### Extra-features

- Simple lazy-loading implementation while scrolling down;
- Hover subtle zooms movie card for a better UX;
- Responsive design for mobile and desktop devices;

## Setup and installation

This application is built with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and uses a [json-server](https://github.com/typicode/json-server) built around [the movie database](https://www.themoviedb.org/).

To get started, ensure you have the correct dependencies installed and run the following commands:

1. `yarn install`
2. `yarn start`

This will kick off two processes, the JSON server at [http://localhost:2022](http://localhost:2022) and the React server at [http://localhost:2021](http://localhost:2021).

## Movie Schema

```
type Movie {
  id: ID!
  originalLanguage: String!
  originalTitle: String!
  overview: String!
  popularity: Float!
  posterPath: String!
  releaseDate: String!
  title: String!
  voteAverage: Float!
  voteCount: Int!
  genres: [String]!
  budget: Int!
  runtime: Int!
  cast: [Cast]!
  director: Director!
}
```
