import PosterCard from 'components/PosterCard'
import './Home.css'
import { useFetchAllMovies } from './rest'
import Section from 'components/common/Section'
import GenreSection from 'components/sections/GenreSection'
import Top5Section from 'components/sections/Top5Section'

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
  const { data, loading, genres } = useFetchAllMovies()

  return (
    <div>
      <div style={{ paddingTop: '4em' }}>
        <Top5Section loading={loading} data={data} />
        <GenreSection genres={genres} />
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
