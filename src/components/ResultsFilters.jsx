import Game from "./Game";
import useGames from '../hooks/useGames'
import Spinner from "../components/Spinner"

function ResultsFilters({params}) {

	const {loading, games} = useGames({params})

	return ( loading
		? <Spinner />
		: <>
			{
				games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
			}
      </>
	)
}

export default ResultsFilters