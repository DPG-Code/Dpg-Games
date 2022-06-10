import { useEffect, useState } from "react";
import Game from "./Game";
import getGames from "../services/getGames";

function Results() {
	const [games, setGame] = useState([])

	useEffect(function(){
		getGames()
			.then(games => setGame(games))
	}, [])

	return games.map(singleGame => <Game thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
}

export default Results

/*function Results() {
	const [games, setGame] = useState([])

	useEffect(function(){
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'd54b3e58ccmshcd2ec81f7622fe2p1f703ajsncf7ee4951129',
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
		fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=mmo&sort-by=popularity`, options)
			.then(res => res.json())
			.then(response => {
				const data = response
				console.log(data)
				const games = data.map(game => game)
				setGame(games)
			})
	}, [])

	return (
		<>
			<section>
				{
					games.map(singleGame => <Game thumbnail={singleGame.thumbnail} title={singleGame.title} platform={singleGame.platform} developer={singleGame.developer}/>)
				}
			</section>
		</>
	)
}*/