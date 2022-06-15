import useGamesId from '../hooks/useGameId'
import Game from '../components/Game'

export default function ResultsSearch ({params}) {
  const {keyword} = params
  const {loading, games} = useGamesId({keyword})

  const gameById = games.filter(gameById => gameById.title.toLowerCase() == keyword.toLowerCase().split("%20").join(" "))

  return (
    <>
      { loading
      ? <p>Cargando...</p>
      : gameById.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
      }
    </>
  )
}

//games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)