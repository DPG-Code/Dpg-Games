import { useEffect, useState } from "react";
import Game from "./Game";
import getGames from "../services/getGames";

function Results({params}) {
	const {platform, category, sort} = params

	const [games, setGame] = useState([])
	const [loading, setLoading] = useState([false])

	useEffect(function(){
		setLoading(true)
		getGames({platform, category, sort})
			.then(games => {
				setGame(games)
				setLoading(false)
			})
	}, [platform])

	if(loading) return <p>cargando...</p>

	return (
		<>
			{
				games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
			}
      	</>
	)
}

export default Results