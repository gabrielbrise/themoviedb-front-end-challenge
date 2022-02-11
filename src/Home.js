import PosterCard from 'components/PosterCard'
import './Home.css'
import { useFetchAllMovies } from './rest'
import Section from 'components/Section'
import GenreCard from 'components/GenreCard'

/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 **/
const Home = () => {
  const { data, loading } = useFetchAllMovies()

  const genres = [
    { title: 'Comedy', url: '' },
    { title: 'Action', url: '' },
    { title: 'Drama', url: '' },
    { title: 'True Crime', url: '' }
  ]

  return (
    <div>
      <div style={{ paddingTop: '4em' }}>
        <Section title="Movies" subtitle="TOP 5">
          {loading ? (
            <div>Loading movies...</div>
          ) : (
            <ol
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {data.slice(0, 5).map(movie => (
                <PosterCard image={movie.posterPath} id={movie.id} key={movie.id} />
              ))}
            </ol>
          )}
        </Section>
        <Section
          title="Browse"
          subtitle="by Genre"
          style={{ backgroundColor: 'rgb(244, 245, 251)' }}
        >
          {genres.map(({ title }, index) => (
            <GenreCard title={title} key={`${title}-${index}`} />
          ))}
        </Section>
        <Section title="Movies" subtitle="Browse All">
          {loading ? (
            <div>Loading movies...</div>
          ) : (
            <ol
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {data.slice(0, 5).map(movie => (
                <PosterCard image={movie.posterPath} id={movie.id} key={movie.id} />
              ))}
            </ol>
          )}
        </Section>
      </div>
    </div>

  )
}

export default Home
