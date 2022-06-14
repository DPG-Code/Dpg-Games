import Game from "./Game";
import useGames from '../hooks/useGames'

function ResultsFilters({params}) {

	const {loading, games} = useGames({params})

	return ( loading
		? <p>cargando...</p>
		: <>
			{
				games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
			}
      	</>
	)
}

export default ResultsFilters