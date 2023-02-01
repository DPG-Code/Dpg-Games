import useGamesId from '../hooks/useGameId'
import Game from '../components/Game'
import Spinner from "../components/Spinner"

export default function ResultsSearch ({params}) {
  const {keyword} = params
  const {loading, games} = useGamesId({keyword})

  const gameById = games.filter(gameById => gameById.title.toLowerCase() == keyword.toLowerCase().split("%20").join(" "))
  
  return (
    <>
      {
        gameById.length !== 0
          ? <div className='results_title'>
              <div className='shadow-title_results'></div>
              <h2>RESULTS</h2>
            </div>
          : <h2 className='no-results'>No results</h2>
      }
      { loading
      ? <Spinner />
      : gameById.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
      }
    </>
  )
}

//games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)