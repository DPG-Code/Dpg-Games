import useGamesId from '../hooks/useGameId'
import Game from '../components/Game'

export default function ResultsSearch ({params}) {
  const {keyword} = params

  const {loading, games} = useGamesId({keyword})

  return (
    <>
      { loading
      ? <p>Cargando...</p>
      : <Game key={games.id} thumbnail={games.thumbnail} title={games.title} platform={games.platform} developer={games.developer}/>
      }
    </>
  )
}