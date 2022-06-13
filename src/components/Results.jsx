import { useEffect, useState } from "react";
import Game from "./Game";
import GetDataApi from "../services/GetDataApi";

function Results({params}) {
	const {platform, category, sort} = params

	const [games, setGame] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(function(){
		setLoading(true)
		GetDataApi({platform, category, sort})
			.then(games => {
				setGame(games)
				setLoading(false)
			})
	}, [params])

	return ( loading
		? <p>cargando...</p>
		: <>
			{
				games.map(singleGame => <Game key={singleGame.id} thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
			}
      	</>
	)
}

export default Results