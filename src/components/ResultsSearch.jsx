import useGamesId from '../hooks/useGameId'
import Game from '../components/Game'
import Spinner from "../components/Spinner"

export default function ResultsSearch ({params}) {
  const {keyword} = params
  const {loading, games} = useGamesId({keyword})

  const gameById = games.filter(gameById => gameById.title.toLowerCase() == keyword.toLowerCase().split("%20").join(" "))

  return (
    <>
      <h2>Result</h2>
      { loading
      ? <Spinner />
      : gameById.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
      }
      <div className='bottom'></div>
    </>
  )
}

//games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)